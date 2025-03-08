import { ApodResponse, ImageData } from "@/types";

function getImagesDataFromResponse(response: ApodResponse[]): ImageData[] {
    const responseImages: ApodResponse[] = response.filter(
        (image) => image.media_type === "image"
    );

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
