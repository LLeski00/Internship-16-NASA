import { getApodImageByDate } from "@/services/apodApi";
import { ImageData } from "@/types/image";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ImageDetailsPage = () => {
    const { date } = useParams<{ date: string }>();
    const [image, setImage] = useState<ImageData>();

    useEffect(() => {
        loadImageData();
    }, []);

    async function loadImageData() {
        if (date === undefined) throw new Error("The date is undefined");
        const image: ImageData = await getApodImageByDate(new Date(date));
        setImage(image);
    }

    return (
        <div className="image-details">
            <img src={image?.url} alt={image?.title} />
        </div>
    );
};

export default ImageDetailsPage;
