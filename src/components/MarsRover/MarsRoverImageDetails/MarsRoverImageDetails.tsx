import { RoverImageData } from "@/types/mars";
import { Button } from "@mui/material";
import { FC } from "react";

interface MarsRoverImageDetailsProps {
    image: RoverImageData;
    returnToGallery: Function;
}

const MarsRoverImageDetails: FC<MarsRoverImageDetailsProps> = ({
    image,
    returnToGallery,
}) => {
    return (
        <>
            <Button onClick={() => returnToGallery()} variant="contained">
                Back
            </Button>
            {image ? (
                <div className="image-details">
                    <img
                        src={image.img_src}
                        alt={`${image.rover.name}-image`}
                    />
                    <h2>Camera: {image.camera.full_name}</h2>
                    <p>Date: {image.earth_date}</p>
                    <p>Rover: {image.rover.name}</p>
                </div>
            ) : (
                <p>Image not found.</p>
            )}
        </>
    );
};

export default MarsRoverImageDetails;
