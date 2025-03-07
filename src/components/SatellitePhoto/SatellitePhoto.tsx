import { withLoading } from "@/hoc/WithLoading";
import { FC, useEffect } from "react";

interface SatellitePhotoProps {
    imageUrl: string | undefined;
    isLoading: boolean;
    error: Error | null;
}

const SatellitePhoto: FC<SatellitePhotoProps> = ({ imageUrl, error }) => {
    useEffect(() => {
        if (error) throw new Error(error.message);
    }, [error]);

    return imageUrl && <img src={imageUrl} alt="satellite-photo" />;
};

export const SatellitePhotoWithLoading = withLoading(SatellitePhoto);
