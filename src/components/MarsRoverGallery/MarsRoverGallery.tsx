import { useEffect, useRef, useState } from "react";
import "./MarsRoverGallery.css";
import { getMarsRoverImages } from "@/services/marsApi";
import { useMarsRover } from "@/hooks/UseMarsRover";
import { RoverImageData } from "@/types/mars";

const MarsRoverGallery = () => {
    const [images, setImages] = useState<RoverImageData[]>([]);
    const { roverFilter } = useMarsRover();
    const dateRef = useRef<Date>(new Date());
    const pageCount = useRef<number>(1);

    useEffect(() => {
        if (roverFilter.rover !== "") loadImages();
    }, [roverFilter]);

    async function loadImages() {
        const newImages: RoverImageData[] = await getMarsRoverImages(
            roverFilter,
            pageCount.current
        );
        console.log(newImages);
        setImages(newImages);
    }

    return (
        <>
            {images.map((image) => (
                <img
                    key={image.id}
                    src={image.img_src}
                    alt="mars-rover-photo"
                />
            ))}
        </>
    );
};

export default MarsRoverGallery;
