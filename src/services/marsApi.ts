import {
    Rover,
    RoverFilterType,
    RoverImageData,
    RoverImageResponse,
    RoverResponse,
} from "@/types/mars";
import { createRoverApi } from "@/utils/roverUtils";

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
        console.log(fetchedImages);
        return fetchedImages;
    } catch (error) {
        console.error((error as Error).message);
        return null;
    }
}

async function getMarsRovers(): Promise<Rover[]> {
    const api =
        MARS_ROVER_API_URL + "?api_key=" + import.meta.env.VITE_NASA_API_KEY;
    const rovers: RoverResponse | null = await fetchMarsRovers(api);
    return rovers ? rovers.rovers : [];
}

async function getMarsRoverImages(
    filters: RoverFilterType
): Promise<RoverImageData[]> {
    const api = createRoverApi(MARS_ROVER_API_URL, filters);

    const rovers = await fetchMarsRoverImages(api);
    return rovers ? rovers.photos : [];
}

async function getMarsRoverImageById(
    filters: RoverFilterType,
    id: string
): Promise<RoverImageData | null> {
    const api = createRoverApi(MARS_ROVER_API_URL, filters);

    const rovers = await fetchMarsRoverImages(api);
    const searchedImage = rovers
        ? rovers.photos.find((rover) => rover.id.toString() === id)
        : undefined;
    return searchedImage ?? null;
}

export { getMarsRovers, getMarsRoverImages, getMarsRoverImageById };
