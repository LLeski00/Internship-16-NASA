import { RoverImageData } from "@/types/mars";
import { FC } from "react";
import "./MarsRoverImageList.css";

interface MarsRoverImageListProps {
    images: RoverImageData[];
    setImages: Function;
    setSelectedImage: Function;
}

const MarsRoverImageList: FC<MarsRoverImageListProps> = ({
    images,
    setImages,
    setSelectedImage,
}) => {
    function handleImageClick(image: RoverImageData) {
        console.log(images);
        setImages([]);
        setSelectedImage(image);
    }

    return (
        <div className="mars-rover-image-list">
            {images.map((image) => (
                <img
                    onClick={() => handleImageClick(image)}
                    key={image.id}
                    src={image.img_src}
                    alt="mars-rover-photo"
                />
            ))}
        </div>
    );
};

export default MarsRoverImageList;
