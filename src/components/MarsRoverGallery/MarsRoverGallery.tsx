import { useEffect, useRef, useState } from "react";
import "./MarsRoverGallery.css";
import { getMarsRoverImages } from "@/services/marsApi";
import { useMarsRover } from "@/hooks/UseMarsRover";
import { RoverImageData } from "@/types/mars";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants/routes";

const MarsRoverGallery = () => {
    const [images, setImages] = useState<RoverImageData[]>([]);
    const { roverFilter } = useMarsRover();
    const navigate = useNavigate();
    const api = routes.MARS_ROVER_IMAGE_DETAILS.path.split(":")[0];

    useEffect(() => {
        if (roverFilter.rover !== "") loadImages();
    }, [roverFilter]);

    async function loadImages() {
        const newImages: RoverImageData[] = await getMarsRoverImages(
            roverFilter
        );
        console.log(newImages);
        setImages(newImages);
    }

    return (
        <>
            {images.map((image) => (
                <img
                    onClick={() => navigate(`/${api}${image.id}`)}
                    key={image.id}
                    src={image.img_src}
                    alt="mars-rover-photo"
                />
            ))}
        </>
    );
};

export default MarsRoverGallery;
