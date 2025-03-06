import { useMarsRover } from "@/hooks/UseMarsRover";
import { getMarsRoverImageById } from "@/services/marsApi";
import { RoverImageData } from "@/types/mars";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MarsRoverImageDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { roverFilter } = useMarsRover();
    const [image, setImage] = useState<RoverImageData | null>();

    useEffect(() => {
        loadImageData();
    }, []);

    async function loadImageData() {
        if (id === undefined) throw new Error("The date is undefined");
        const image: RoverImageData | null = await getMarsRoverImageById(
            roverFilter,
            id
        );
        setImage(image);
    }

    return (
        <>
            {image && (
                <div className="image-details">
                    <img src={image.img_src} alt="mars-rover-photo" />
                </div>
            )}
        </>
    );
};

export default MarsRoverImageDetailsPage;
