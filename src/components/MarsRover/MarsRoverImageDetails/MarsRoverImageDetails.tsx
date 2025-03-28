import { RoverImageData } from "@/types";
import { Button } from "@mui/material";
import { FC } from "react";
import "./MarsRoverImageDetails.css";

interface MarsRoverImageDetailsProps {
    image: RoverImageData;
    returnToGallery: Function;
}

const MarsRoverImageDetails: FC<MarsRoverImageDetailsProps> = ({
    image,
    returnToGallery,
}) => {
    return (
        <div className="mars-rover-image-details">
            <Button onClick={() => returnToGallery()} variant="contained">
                Back
            </Button>
            {image ? (
                <div className="image-details">
                    <img
                        src={image.img_src}
                        alt={`${image.rover.name}-image`}
                    />
                    <div className="image-details-content">
                        <h2>Camera: {image.camera.full_name}</h2>
                        <p>Date: {image.earth_date}</p>
                        <p>Rover: {image.rover.name}</p>
                    </div>
                </div>
            ) : (
                <p>Image not found.</p>
            )}
        </div>
    );
};

export default MarsRoverImageDetails;
