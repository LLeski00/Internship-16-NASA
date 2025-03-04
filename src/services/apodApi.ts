import { ApodResponse } from "@/types/apod";
import { ImageData } from "@/types/image";
import {
    getImageDataFromResponse,
    getImagesDataFromResponse,
} from "@/utils/ApodUtils";
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

async function fetchApodImage(api: string): Promise<ApodResponse | null> {
    try {
        const response = await fetch(api);

        if (!response.ok)
            throw new Error(`Response status: ${response.status}`);

        const fetchedImages: ApodResponse = await response.json();
        return fetchedImages;
    } catch (error) {
        console.error((error as Error).message);
        return null;
    }
}

async function getLatestApodImages(): Promise<ImageData[]> {
    const api: string =
        APOD_API_URL + "&start_date=" + createRecentDateString();
    const response: ApodResponse[] = await fetchApodImages(api);
    return getImagesDataFromResponse(response);
}

async function getApodImages(
    startDate: Date,
    endDate: Date
): Promise<ImageData[]> {
    const startDateString: string = getDateString(startDate);
    const endDateString: string = getDateString(endDate);
    const api =
        APOD_API_URL +
        "&start_date=" +
        startDateString +
        "&end_date=" +
        endDateString;
    const response: ApodResponse[] = await fetchApodImages(api);
    return getImagesDataFromResponse(response);
}

async function getApodImageByDate(date: Date): Promise<ImageData> {
    const dateString: string = getDateString(date);
    const api = APOD_API_URL + "&date=" + dateString;
    const response: ApodResponse | null = await fetchApodImage(api);

    if (response === null) throw new Error("The image was not found");

    if (response.media_type !== "image")
        throw new Error("The media is not image");

    return getImageDataFromResponse(response);
}

export { getApodImages, getLatestApodImages, getApodImageByDate };
