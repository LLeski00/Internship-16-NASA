import { MarsRoverGallery, MarsRoverImageDetails } from "@/components";
import "./MarsRoverPhotosPage.css";
import { RoverImageData } from "@/types/mars";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/error/ErrorFallback";

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
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <MarsRoverGallery setSelectedImage={setSelectedImage} />
                </ErrorBoundary>
            )}
        </div>
    );
};

export default MarsRoverPhotosPage;
