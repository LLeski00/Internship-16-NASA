import { ApodResponse } from "@/types/apod";
import { ImageData } from "@/types/image";

function getImagesDataFromResponse(response: ApodResponse[]): ImageData[] {
    const responseImages: ApodResponse[] = response.filter(
        (image) => image.media_type === "image"
    );

    if (responseImages.length === 0) return [];

    const images: ImageData[] = responseImages.map((image) => {
        return {
            title: image.title,
            date: image.date,
            url: image.url,
            explanation: image.explanation,
        };
    });
    return images;
}

function getImageDataFromResponse(response: ApodResponse): ImageData {
    return {
        title: response.title,
        date: response.date,
        url: response.url,
        explanation: response.explanation,
    };
}

export { getImagesDataFromResponse, getImageDataFromResponse };
