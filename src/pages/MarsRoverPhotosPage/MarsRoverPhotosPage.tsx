import {
    MarsRoverGallery,
    MarsRoverImageDetails,
} from "@/components/MarsRover";
import "./MarsRoverPhotosPage.css";
import { RoverImageData } from "@/types/mars";
import { useState } from "react";

const MarsRoverPhotosPage = () => {
    const [selectedImage, setSelectedImage] = useState<RoverImageData>();

    return (
        <div className="mars-rover-photos-page">
            {selectedImage ? (
                <MarsRoverImageDetails
                    image={selectedImage}
                    returnToGallery={() => setSelectedImage(undefined)}
                />
            ) : (
                <MarsRoverGallery setSelectedImage={setSelectedImage} />
            )}
        </div>
    );
};

export default MarsRoverPhotosPage;
