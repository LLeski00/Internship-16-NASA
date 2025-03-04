import { ApodResponse } from "@/types/apod";
import { ImageData } from "@/types/image";

function getImagesFromResponse(response: ApodResponse[]) {
    const responseImages: ApodResponse[] = response.filter(
        (image) => image.media_type === "image"
    );

    if (responseImages.length === 0) return [];

    const images: ImageData[] = responseImages.map((image) => {
        return {
            title: image.title,
            date: image.date,
            url: image.url,
        };
    });
    return images;
}

export { getImagesFromResponse };
