import { Rover, RoverResponse } from "@/types/mars";

const MARS_ROVER_API_URL: string =
    import.meta.env.VITE_NASA_API_URL +
    "/mars-photos/api/v1/rovers?api_key=" +
    import.meta.env.VITE_NASA_API_KEY;

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

async function getMarsRovers(): Promise<Rover[]> {
    const rovers: RoverResponse | null = await fetchMarsRovers(
        MARS_ROVER_API_URL
    );
    return rovers ? rovers.rovers : [];
}

export { getMarsRovers };
