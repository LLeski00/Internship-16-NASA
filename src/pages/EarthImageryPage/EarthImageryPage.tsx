import { getSatellitePhoto } from "@/services";
import { SatellitePhotoResponse } from "@/types";
import { LatLng } from "leaflet";
import { useEffect, useState } from "react";
import "./EarthImageryPage.css";
import {
    InteractiveMap,
    FavouriteLocations,
    SatellitePhotoWithLoading,
} from "@/components";
import { useErrorHandler } from "@/hooks";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/error/ErrorFallback";

const EarthImageryPage = () => {
    const [imageUrl, setImageUrl] = useState<string | undefined>();
    const [position, setPosition] = useState<LatLng>(
        new LatLng(47.517200697839414, 14.062500000000002)
    );
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { error, handleError, resetError } = useErrorHandler();

    useEffect(() => {
        loadImageUrl();
    }, [position]);

    async function loadImageUrl() {
        setImageUrl(undefined);
        setIsLoading(true);
        const newImageUrl: SatellitePhotoResponse | null =
            await getSatellitePhoto(position);
        if (!newImageUrl) {
            handleError(
                new Error("There was an error fetching the satellite photo")
            );
            return;
        }
        resetError();
        setImageUrl(newImageUrl.url);
        setIsLoading(false);
    }

    return (
        <div className="earth-imagery-page">
            <h1>Earth Imagery</h1>
            <p>
                Explore our planet from space with stunning satellite imagery.{" "}
                <br /> <br />
                Interactive Map: Click on any location to select it. <br />
                Satellite Photo: Once a location is chosen, view the latest
                satellite photo of that spot. <br />
                Navigate Easily: Zoom, pan, and move across the map to explore
                any corner of the world.
                <br /> Save Favorites: Mark your favorite locations for quick
                access later.
            </p>
            <InteractiveMap position={position} setPosition={setPosition} />
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <SatellitePhotoWithLoading
                    imageUrl={imageUrl}
                    isLoading={isLoading}
                    error={error}
                />
            </ErrorBoundary>
            <FavouriteLocations position={position} setPosition={setPosition} />
        </div>
    );
};

export default EarthImageryPage;
