import { ApodResponse } from "@/types/apod";
import { ImageData } from "@/types/image";
import { getImagesFromResponse } from "@/utils/ApodUtils";
import { createRecentDateString, getDateString } from "@/utils/dateUtils";

const APOD_API_URL =
    import.meta.env.VITE_NASA_API_URL +
    "/planetary/apod?api_key=" +
    import.meta.env.VITE_NASA_API_KEY;

async function fetchApodImages(api: string): Promise<ApodResponse[]> {
    try {
        const response = await fetch(api);

        if (!response.ok)
            throw new Error(`Response status: ${response.status}`);

        const fetchedImages: ApodResponse[] = await response.json();
        return fetchedImages;
    } catch (error) {
        console.error((error as Error).message);
        return [];
    }
}

async function getLatestApodImages(): Promise<ImageData[]> {
    const api: string =
        APOD_API_URL + "&start_date=" + createRecentDateString();
    const response: ApodResponse[] = await fetchApodImages(api);
    return getImagesFromResponse(response);
}

async function getApodImages(startDate: Date): Promise<ImageData[]> {
    const dateString: string = getDateString(startDate);
    const api = APOD_API_URL + "&start_date=" + dateString;
    const response: ApodResponse[] = await fetchApodImages(api);
    return getImagesFromResponse(response);
}

export { getApodImages, getLatestApodImages };
