import { FC, useEffect, useState } from "react";
import "./MarsRoverGallery.css";
import { getMarsRoverImages } from "@/services/marsApi";
import { useMarsRover } from "@/hooks/UseMarsRover";
import { RoverImageData } from "@/types/mars";
import {
    MarsRoverImageListWithLoading,
    MarsRoverPhotosFilter,
} from "@/components";

interface MarsRoverGalleryProps {
    setSelectedImage: Function;
}

const MarsRoverGallery: FC<MarsRoverGalleryProps> = ({ setSelectedImage }) => {
    const [images, setImages] = useState<RoverImageData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { roverFilter } = useMarsRover();

    useEffect(() => {
        if (roverFilter.rover !== "") loadImages();
    }, [roverFilter]);

    async function loadImages() {
        setIsLoading(true);
        const newImages: RoverImageData[] = await getMarsRoverImages(
            roverFilter
        );
        setImages(newImages);
        setIsLoading(false);
    }

    return (
        <>
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
        </>
    );
};

export default MarsRoverGallery;
