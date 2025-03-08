import {
    Rover,
    RoverFilterType,
    RoverImageData,
    RoverImageResponse,
    RoverResponse,
} from "@/types";
import { createRoverApi } from "@/utils";

const MARS_ROVER_API_URL: string =
    import.meta.env.VITE_NASA_API_URL + "/mars-photos/api/v1/rovers";

async function fetchMarsRovers(api: string): Promise<RoverResponse | null> {
    try {
        const response = await fetch(api);

        if (!response.ok)
            throw new Error(`Response status: ${response.status}`);

        const fetchedRovers: RoverResponse = await response.json();
        return fetchedRovers;
    } catch (error) {
        console.error((error as Error).message);
        return null;
    }
}

async function fetchMarsRoverImages(
    api: string
): Promise<RoverImageResponse | null> {
    try {
        const response = await fetch(api);

        if (!response.ok)
            throw new Error(`Response status: ${response.status}`);

        const fetchedImages = await response.json();
        return fetchedImages;
    } catch (error) {
        console.error((error as Error).message);
        return null;
    }
}

async function getActiveMarsRovers(): Promise<Rover[] | null> {
    const api =
        MARS_ROVER_API_URL + "?api_key=" + import.meta.env.VITE_NASA_API_KEY;
    const rovers: RoverResponse | null = await fetchMarsRovers(api);
    return rovers
        ? rovers.rovers.filter((rover) => rover.status === "active")
        : null;
}

async function getMarsRoverImages(
    filters: RoverFilterType
): Promise<RoverImageData[] | null> {
    const api = createRoverApi(MARS_ROVER_API_URL, filters);
    const rovers: RoverImageResponse | null = await fetchMarsRoverImages(api);
    return rovers ? rovers.photos : null;
}

export { getActiveMarsRovers, getMarsRoverImages };
