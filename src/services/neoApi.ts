import { NeoData, NeoResponse } from "@/types/neo";

const NEO_API_URL =
    import.meta.env.VITE_NASA_API_URL +
    "/neo/rest/v1/feed?api_key=" +
    import.meta.env.VITE_NASA_API_KEY;

async function fetchNeos(api: string): Promise<NeoResponse | null> {
    try {
        const response = await fetch(api);

        if (!response.ok)
            throw new Error(`Response status: ${response.status}`);

        const fetchedNeos: NeoResponse = await response.json();
        return fetchedNeos;
    } catch (error) {
        console.error((error as Error).message);
        return null;
    }
}

async function getNeos(): Promise<NeoData | null> {
    const api = NEO_API_URL;

    const response: NeoResponse | null = await fetchNeos(api);
    return response ? response.near_earth_objects : null;
}

export { getNeos };
