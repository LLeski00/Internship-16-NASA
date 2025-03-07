import { FC, useEffect, useRef, useState } from "react";
import { ImageData } from "@/types/image";
import { DateFilterType } from "@/types/filter";
import { getApodImages } from "@/services/apodApi";
import { getDateWithOffset } from "@/utils/dateUtils";
import "./ApodGallery.css";
import { useInView } from "react-intersection-observer";
import { ImageListWithLoading } from "../ImageList/ImageList";
import { useErrorHandler } from "@/hooks";

interface ApodGalleryProps {
    dateFilter: DateFilterType | undefined;
}

const ApodGallery: FC<ApodGalleryProps> = ({ dateFilter }) => {
    const [images, setImages] = useState<ImageData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { ref, inView } = useInView();
    const { error, handleError } = useErrorHandler();
    const dateRef = useRef<Date>(new Date());

    useEffect(() => {
        if (dateFilter) dateRef.current = dateFilter.endDate;
        loadImages(true);
    }, [dateFilter]);

    useEffect(() => {
        if (inView) handleInfiniteScroll();
    }, [inView]);

    useEffect(() => {
        if (error) throw new Error(error.message);
    }, [error]);

    async function loadImages(firstLoad: boolean = false) {
        setIsLoading(true);
        const startDate: Date = getStartDate(dateRef.current);
        const newImages: ImageData[] | null = await getApodImages(
            startDate,
            dateRef.current
        );
        if (!newImages) {
            handleError(
                new Error("There was an error with fetching the images")
            );
            return;
        }
        firstLoad ? setImages(newImages) : setImages([...images, ...newImages]);
        dateRef.current = getDateWithOffset(dateRef.current, -21);
        setIsLoading(false);
    }

    function getStartDate(endDate: Date) {
        const offsetDate = getDateWithOffset(endDate, -20);

        if (dateFilter && offsetDate < dateFilter.startDate)
            return dateFilter.startDate;

        return offsetDate;
    }

    function handleInfiniteScroll() {
        if (dateFilter && dateRef.current < dateFilter.startDate) return;
        loadImages();
    }

    return (
        <>
            <ImageListWithLoading images={images} isLoading={isLoading} />
            <div ref={ref} className="loading-intersection"></div>
        </>
    );
};

export default ApodGallery;
