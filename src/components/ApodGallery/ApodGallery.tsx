import { ImageCard } from "@/components";
import { getLatestApodImages } from "@/services/apodApi";
import { ImageData } from "@/types/image";
import { useEffect, useState } from "react";
import "./ApodGallery.css";

const ApodGallery = () => {
    const [images, setImages] = useState<ImageData[]>([]);

    useEffect(() => {
        loadImages();
    }, []);

    async function loadImages() {
        const images: ImageData[] = await getLatestApodImages();
        setImages(images);
    }

    return (
        <div className="apod-gallery">
            {images.map((image: ImageData) => (
                <ImageCard key={image.url} data={image} />
            ))}
        </div>
    );
};

export default ApodGallery;
