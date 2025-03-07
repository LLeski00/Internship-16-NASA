import { withLoading } from "@/hoc/WithLoading";
import { FC, useEffect } from "react";
import "./SatellitePhoto.css";

interface SatellitePhotoProps {
    imageUrl: string | undefined;
    isLoading: boolean;
    error: Error | null;
}

const SatellitePhoto: FC<SatellitePhotoProps> = ({ imageUrl, error }) => {
    useEffect(() => {
        if (error) throw new Error(error.message);
    }, [error]);

    return (
        <div className="satellite-photo">
            <p>The satellite photo:</p>
            {imageUrl !== "" && <img src={imageUrl} alt="satellite-photo" />}
        </div>
    );
};

export const SatellitePhotoWithLoading = withLoading(SatellitePhoto);
