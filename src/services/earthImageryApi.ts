import { SatellitePhotoResponse } from "@/types/eartImagery";
import { getDateString } from "@/utils/dateUtils";
import { LatLngExpression } from "leaflet";

const EARTH_IMAGERY_API_URL =
    import.meta.env.VITE_NASA_API_URL +
    "/planetary/earth/assets?api_key=" +
    import.meta.env.VITE_NASA_API_KEY;

async function fetchSatellitePhoto(
    api: string
): Promise<SatellitePhotoResponse | null> {
    try {
        const response = await fetch(api);

        if (!response.ok)
            throw new Error(`Response status: ${response.status}`);

        const fetchedImage: SatellitePhotoResponse = await response.json();
        return fetchedImage;
    } catch (error) {
        console.error((error as Error).message);
        return null;
    }
}

async function getSatellitePhoto(
    coordinates: LatLngExpression
): Promise<SatellitePhotoResponse> {
    const lat: number | null =
        Array.isArray(coordinates) && coordinates.length === 2
            ? coordinates[0]
            : null;
    const lng: number | null =
        Array.isArray(coordinates) && coordinates.length === 2
            ? coordinates[1]
            : null;
    const dateString = getDateString(new Date("2025-01-01"));

    if (!lat || !lng) throw new Error("The coordinates are invalid");

    const api =
        EARTH_IMAGERY_API_URL +
        "&lat=" +
        lat.toString() +
        "&lon=" +
        lng.toString() +
        "&date=" +
        dateString +
        "&dim=0.10";
    const response: SatellitePhotoResponse | null = await fetchSatellitePhoto(
        api
    );

    if (!response) throw new Error("The image was not found");

    return response;
}

export { getSatellitePhoto };
