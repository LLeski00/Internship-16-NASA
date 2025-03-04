import { ImageData } from "@/types/image";
import { FC } from "react";

interface ImageCardProps {
    data: ImageData;
}

const ImageCard: FC<ImageCardProps> = ({ data }) => {
    return (
        <div className="image-card">
            <img src={data.url} alt="" />
        </div>
    );
};

export default ImageCard;
