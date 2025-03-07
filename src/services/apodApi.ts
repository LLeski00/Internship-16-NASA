import { ApodResponse } from "@/types/apod";
import { ImageData } from "@/types/image";
import {
    getImageDataFromResponse,
    getImagesDataFromResponse,
} from "@/utils/apodUtils";
import { getDateString } from "@/utils/dateUtils";

const APOD_API_URL =
    import.meta.env.VITE_NASA_API_URL +
    "/planetary/apod?api_key=" +
    import.meta.env.VITE_NASA_API_KEY;

async function fetchApods(api: string): Promise<ApodResponse[] | null> {
    try {
        const response = await fetch(api);

        if (!response.ok)
            throw new Error(`Response status: ${response.status}`);

        const fetchedImages: ApodResponse[] = await response.json();
        return fetchedImages;
    } catch (error) {
        console.error((error as Error).message);
        return null;
    }
}

async function fetchApod(api: string): Promise<ApodResponse | null> {
    try {
        const response = await fetch(api);

        if (!response.ok)
            throw new Error(`Response status: ${response.status}`);

        const fetchedImage: ApodResponse = await response.json();
        return fetchedImage;
    } catch (error) {
        console.error((error as Error).message);
        return null;
    }
}

async function getApodImages(
    startDate: Date,
    endDate: Date
): Promise<ImageData[] | null> {
    const startDateString: string = getDateString(startDate);
    const endDateString: string = getDateString(endDate);
    const api =
        APOD_API_URL +
        "&start_date=" +
        startDateString +
        "&end_date=" +
        endDateString;
    const response: ApodResponse[] | null = await fetchApods(api);
    return response ? getImagesDataFromResponse(response) : null;
}

async function getApodImageByDate(date: Date): Promise<ImageData | null> {
    const dateString: string = getDateString(date);
    const api = APOD_API_URL + "&date=" + dateString;
    const response: ApodResponse | null = await fetchApod(api);
    if (response === null || response.media_type !== "image") return null;
    return getImageDataFromResponse(response);
}

export { getApodImages, getApodImageByDate };
