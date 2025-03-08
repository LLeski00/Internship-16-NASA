import { ImageData } from "@/types";
import { ImageCard } from "@/components";
import { FC } from "react";
import { withLoading } from "@/hoc/WithLoading";
import "./ImageList.css";

interface ImageListProps {
    images: ImageData[];
    isLoading: boolean;
}

const ImageList: FC<ImageListProps> = ({ images }) => {
    return (
        <div className="image-list">
            {images.map((image: ImageData) => (
                <ImageCard key={image.date} data={image} />
            ))}
        </div>
    );
};

export const ImageListWithLoading = withLoading(ImageList);
