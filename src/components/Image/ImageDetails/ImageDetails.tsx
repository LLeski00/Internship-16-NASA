import { withLoading } from "@/hoc/WithLoading";
import { ImageData } from "@/types";
import { FC, useEffect } from "react";
import "./ImageDetails.css";

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
        <>
            {image && (
                <div className="image-details">
                    <img src={image.url} alt={image.title} />
                    <article className="image-details-content">
                        <h2>{image.title}</h2>
                        <p>Date: {image.date}</p>
                        <p>{image.explanation}</p>
                    </article>
                </div>
            )}
        </>
    );
};

export const ImageDetailsWithLoading = withLoading(ImageDetails);
