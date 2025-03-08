import { FC, useEffect, useState } from "react";
import "./MarsRoverGallery.css";
import { getMarsRoverImages } from "@/services";
import { useMarsRover, useErrorHandler } from "@/hooks";
import { RoverImageData } from "@/types";
import {
    MarsRoverImageListWithLoading,
    MarsRoverPhotosFilter,
    MarsRoverPhotosPagination,
} from "@/components";

interface MarsRoverGalleryProps {
    setSelectedImage: Function;
}

const MarsRoverGallery: FC<MarsRoverGalleryProps> = ({ setSelectedImage }) => {
    const [images, setImages] = useState<RoverImageData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { roverFilter } = useMarsRover();
    const { error, handleError, resetError } = useErrorHandler();

    useEffect(() => {
        if (roverFilter.rover !== "") loadImages();
    }, [roverFilter]);

    useEffect(() => {
        if (error) throw new Error(error.message);
    }, [error]);

    async function loadImages() {
        setIsLoading(true);
        const newImages: RoverImageData[] | null = await getMarsRoverImages(
            roverFilter
        );
        if (!newImages) {
            handleError(new Error("Error while fetching mars rover images"));
            return;
        }
        setImages(newImages);
        setIsLoading(false);
    }

    return (
        <div className="mars-rover-gallery">
            <h1>Mars Rover Photo Gallery</h1>
            <p>
                A Mars Rover Photos page lets you explore stunning images
                captured by NASA's Mars rovers like Curiosity, Opportunity,
                Spirit and others. You can browse photos taken on different
                Martian days (sols), filter by rover and camera type, and dive
                into the incredible landscapes and discoveries from the Red
                Planet.
            </p>
            <MarsRoverPhotosFilter />
            <MarsRoverImageListWithLoading
                images={images}
                setImages={setImages}
                setSelectedImage={setSelectedImage}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
            <MarsRoverPhotosPagination images={images} />
        </div>
    );
};

export default MarsRoverGallery;
