import MarsRoverGallery from "@/components/MarsRoverGallery/MarsRoverGallery";
import "./MarsRoverPhotosPage.css";
import MarsRoverImageDetails from "@/components/MarsRoverImageDetails/MarsRoverImageDetails";
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
