import { ImageDetailsWithLoading } from "@/components";
import { routes } from "@/constants/routes";
import { ErrorFallback } from "@/error/ErrorFallback";
import { useErrorHandler } from "@/hooks";
import { getApodImageByDate } from "@/services/apodApi";
import { ImageData } from "@/types/image";
import { isDateStringValid } from "@/utils/dateUtils";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate, useParams } from "react-router-dom";
import "./ImageDetailsPage.css";

const ImageDetailsPage = () => {
    const { date } = useParams<{ date: string }>();
    const [image, setImage] = useState<ImageData>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { error, handleError } = useErrorHandler();
    const navigate = useNavigate();

    useEffect(() => {
        loadImageData();
    }, []);

    async function loadImageData() {
        setIsLoading(true);
        if (date === undefined) {
            handleError(new Error("The date is undefined"));
            return;
        }
        if (!isDateStringValid(date)) {
            handleError(new Error("The date is invalid"));
            return;
        }
        const image: ImageData | null = await getApodImageByDate(
            new Date(date)
        );
        if (!image) {
            handleError(new Error("The image was not found"));
            return;
        }
        setImage(image);
        setIsLoading(false);
    }

    return (
        <div className="image-details-page">
            <Button
                onClick={() => navigate(`${routes.APOD.path}`)}
                variant="contained"
            >
                Back
            </Button>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <ImageDetailsWithLoading
                    image={image}
                    isLoading={isLoading}
                    error={error}
                />
            </ErrorBoundary>
        </div>
    );
};

export default ImageDetailsPage;
