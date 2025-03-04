import { ImageCard } from "@/components";
import { getApodImages, getLatestApodImages } from "@/services/apodApi";
import { ImageData } from "@/types/image";
import { useEffect, useState } from "react";

const ApodGalleryPage = () => {
    const [images, setImages] = useState<ImageData[]>([]);

    useEffect(() => {
        loadImages();
    }, []);

    async function loadImages() {
        const images: ImageData[] = await getLatestApodImages();
        setImages(images);
    }

    return (
        <div className="apod-gallery-page">
            {images.map((image: ImageData) => (
                <ImageCard data={image} />
            ))}
        </div>
    );
};

export default ApodGalleryPage;
