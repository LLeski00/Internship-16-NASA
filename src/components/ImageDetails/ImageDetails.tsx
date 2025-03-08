import { withLoading } from "@/hoc/WithLoading";
import { ImageData } from "@/types/image";
import { FC, useEffect } from "react";

interface ImageDetailsProps {
    image: ImageData | undefined;
    isLoading: boolean;
    error: Error | null;
}

const ImageDetails: FC<ImageDetailsProps> = ({ image, error }) => {
    useEffect(() => {
        if (error) throw new Error(error.message);
    }, [error]);

    return (
        <div className="image-details">
            {image && (
                <div className="image-details">
                    <img src={image.url} alt={image.title} />
                    <h2>{image.title}</h2>
                    <p>{image.explanation}</p>
                </div>
            )}
        </div>
    );
};

export const ImageDetailsWithLoading = withLoading(ImageDetails);
