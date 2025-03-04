import { ImageCard } from "@/components";
import { getApodImages, getLatestApodImages } from "@/services/apodApi";
import { ImageData } from "@/types/image";
import { FC, useEffect, useRef, useState } from "react";
import "./ApodGallery.css";
import { useInView } from "react-intersection-observer";
import { DateFilterType } from "@/types/filter";
import {
    getDateString,
    getDateWithOffset,
    getDifferenceInDaysFromTwoDates,
} from "@/utils/dateUtils";

interface ApodGalleryProps {
    dateFilter: DateFilterType | undefined;
}

const ApodGallery: FC<ApodGalleryProps> = ({ dateFilter }) => {
    const [images, setImages] = useState<ImageData[]>([]);
    const { ref, inView } = useInView();
    const dateCounter = useRef<Date>(getDateWithOffset(new Date(), -19));

    useEffect(() => {
        if (dateFilter) {
            dateCounter.current = new Date(dateFilter.endDate);
            filterImages(dateFilter);
        } else loadLatestImages();
    }, [dateFilter]);

    useEffect(() => {
        if (inView) handleInfiniteScroll();
    }, [inView]);

    async function loadLatestImages() {
        const images: ImageData[] = await getLatestApodImages();
        setImages(images);
    }

    async function loadImages(startDate: Date, endDate: Date) {
        const newImages: ImageData[] = await getApodImages(startDate, endDate);
        setImages([...images, ...newImages]);
    }

    function handleInfiniteScroll() {
        if (
            dateFilter !== undefined &&
            dateCounter.current < dateFilter.startDate
        )
            return;

        dateCounter.current.setDate(dateCounter.current.getDate() - 20);

        if (
            dateFilter !== undefined &&
            dateCounter.current < dateFilter.startDate
        ) {
            const endDate: Date = new Date(dateFilter.startDate);
            const dayDifference: number = getDifferenceInDaysFromTwoDates(
                dateFilter.startDate,
                dateCounter.current
            );
            endDate.setDate(endDate.getDate() + 19 - dayDifference);
            loadImages(dateFilter.startDate, endDate);
            return;
        }

        const endDate: Date = new Date(dateCounter.current);
        endDate.setDate(endDate.getDate() + 19);
        loadImages(dateCounter.current, endDate);
    }

    async function filterImages(dateFilter: DateFilterType) {
        dateCounter.current.setDate(dateCounter.current.getDate() - 20);

        if (dateFilter.startDate > dateCounter.current) {
            const newImages: ImageData[] = await getApodImages(
                dateFilter.startDate,
                dateFilter.endDate
            );
            setImages(newImages);
        } else {
            const newImages: ImageData[] = await getApodImages(
                dateCounter.current,
                dateFilter.endDate
            );
            setImages(newImages);
        }
    }

    return (
        <>
            {images.length !== 0 && (
                <>
                    <div className="apod-gallery">
                        {images.map((image: ImageData) => (
                            <ImageCard key={image.date} data={image} />
                        ))}
                    </div>
                    <div ref={ref} className="loading-intersection"></div>
                </>
            )}
        </>
    );
};

export default ApodGallery;
