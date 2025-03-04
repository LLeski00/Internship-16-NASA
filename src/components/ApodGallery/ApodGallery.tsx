import { ImageCard } from "@/components";
import { getApodImages, getLatestApodImages } from "@/services/apodApi";
import { ImageData } from "@/types/image";
import { useEffect, useRef, useState } from "react";
import "./ApodGallery.css";
import { useInView } from "react-intersection-observer";
import { getDateFromNow, getDateString } from "@/utils/dateUtils";

const ApodGallery = () => {
    const [images, setImages] = useState<ImageData[]>([]);
    const { ref, inView } = useInView();
    const dateCounter = useRef<Date>(getDateFromNow(-20));

    useEffect(() => {
        loadLatestImages();
    }, []);

    useEffect(() => {
        if (inView) handleInfiniteScroll();
    }, [inView]);

    async function loadLatestImages() {
        const images: ImageData[] = await getLatestApodImages();
        setImages(images);
    }

    async function loadImages(startDate: Date, endDate: Date) {
        const newImages: ImageData[] = await getApodImages(startDate, endDate);
        console.log(startDate);
        console.log(endDate);
        setImages([...images, ...newImages]);
    }

    function handleInfiniteScroll() {
        dateCounter.current.setDate(dateCounter.current.getDate() - 20);
        const endDate: Date = new Date(dateCounter.current);
        endDate.setDate(endDate.getDate() + 19);
        loadImages(dateCounter.current, endDate);
    }

    return (
        <>
            {images.length !== 0 && (
                <div className="apod-gallery">
                    {images.map((image: ImageData) => (
                        <ImageCard key={image.date} data={image} />
                    ))}
                    <div ref={ref} className="loading-intersection"></div>
                </div>
            )}
        </>
    );
};

export default ApodGallery;
