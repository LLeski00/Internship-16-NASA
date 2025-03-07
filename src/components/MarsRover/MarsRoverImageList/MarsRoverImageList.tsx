import { RoverImageData } from "@/types/mars";
import { FC } from "react";
import "./MarsRoverImageList.css";
import { withLoading } from "@/hoc/WithLoading";

interface MarsRoverImageListProps {
    images: RoverImageData[];
    setImages: Function;
    setSelectedImage: Function;
    isLoading: boolean;
    setIsLoading: Function;
}

const MarsRoverImageList: FC<MarsRoverImageListProps> = ({
    images,
    setImages,
    setSelectedImage,
    setIsLoading,
}) => {
    function handleImageClick(image: RoverImageData) {
        setIsLoading(true);
        console.log(images);
        setImages([]);
        setSelectedImage(image);
        setIsLoading(false);
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

export const MarsRoverImageListWithLoading = withLoading(MarsRoverImageList);
