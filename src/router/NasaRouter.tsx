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
import { routes } from "@/constants/routes";

const NasaRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path={routes.HOME.path} element={<HomePage />} />
                    <Route
                        path={routes.APOD.path}
                        element={<ApodGalleryPage />}
                    />
                    <Route
                        path={routes.MARS_ROVER.path}
                        element={<MarsRoverPhotosPage />}
                    />
                    <Route
                        path={routes.NEO.path}
                        element={<NeoTrackerPage />}
                    />
                    <Route
                        path={routes.EARTH_IMAGERY.path}
                        element={<EarthImageryPage />}
                    />
                    <Route
                        path={routes.DETAILS.path}
                        element={<DetailsPage />}
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default NasaRouter;
