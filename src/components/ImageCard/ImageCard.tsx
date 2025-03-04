import { routes } from "@/constants/routes";
import { ImageData } from "@/types/image";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./ImageCard.css";

interface ImageCardProps {
    data: ImageData;
}

const ImageCard: FC<ImageCardProps> = ({ data }) => {
    const navigate = useNavigate();

    return (
        <img
            className="image-card"
            onClick={() => navigate(`${routes.IMAGE_DETAILS}/${data.date}`)}
            src={data.url}
            alt={data.title}
        ></img>
    );
};

export default ImageCard;
