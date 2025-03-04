import { ApodGallery } from "@/components";
import "./ApodGalleryPage.css";

const ApodGalleryPage = () => {
    return (
        <div className="apod-gallery-page">
            <h1>Astronomy Picture of the Day (APOD) Gallery</h1>
            <p>
                Discover the cosmos! Each day a different image or photograph of
                our fascinating universe is featured, along with a brief
                explanation written by a professional astronomer.
            </p>
            <ApodGallery />
        </div>
    );
};

export default ApodGalleryPage;
