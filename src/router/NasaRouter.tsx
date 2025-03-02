import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import {
    HomePage,
    ApodGalleryPage,
    MarsRoverPhotosPage,
    NeoTrackerPage,
    EarthImageryPage,
    DetailsPage,
    NotFoundPage,
} from "@/pages";

const NasaRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="" element={<HomePage />} />
                    <Route path="apod" element={<ApodGalleryPage />} />
                    <Route
                        path="mars-rover"
                        element={<MarsRoverPhotosPage />}
                    />
                    <Route path="neo" element={<NeoTrackerPage />} />
                    <Route
                        path="earth-imagery"
                        element={<EarthImageryPage />}
                    />
                    <Route path="details" element={<DetailsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default NasaRouter;
