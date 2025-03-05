import {
    Rover,
    RoverFilterType,
    RoverImageData,
    RoverImageResponse,
    RoverResponse,
} from "@/types/mars";

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
    filters: RoverFilterType,
    page: number
): Promise<RoverImageData[]> {
    const roverFilter = "/" + filters.rover.toLowerCase() + "/photos";
    const cameraFilter =
        filters.camera !== "" ? "&camera=" + filters.camera : "";
    const api =
        MARS_ROVER_API_URL +
        roverFilter +
        "?api_key=" +
        import.meta.env.VITE_NASA_API_KEY +
        "&sol=1000" +
        "&page=" +
        page.toString() +
        cameraFilter;

    const rovers = await fetchMarsRoverImages(api);
    return rovers ? rovers.photos : [];
}

export { getMarsRovers, getMarsRoverImages };
