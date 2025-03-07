import { getSatellitePhoto } from "@/services/earthImageryApi";
import { SatellitePhotoResponse } from "@/types/eartImagery";
import { LatLng } from "leaflet";
import { useEffect, useState } from "react";
import "./EarthImageryPage.css";
import { InteractiveMap } from "@/components";
import FavouriteLocations from "@/components/FavouriteLocations/FavouriteLocations";

const EarthImageryPage = () => {
    const [imageUrl, setImageUrl] = useState<string | undefined>();
    const [position, setPosition] = useState<LatLng>(new LatLng(51.5, -0.09));

    useEffect(() => {
        loadImageUrl();
    }, [position]);

    async function loadImageUrl() {
        const newImageUrl: SatellitePhotoResponse = await getSatellitePhoto(
            position
        );
        setImageUrl(newImageUrl.url);
    }

    return (
        <div className="earth-imagery-page">
            <InteractiveMap position={position} setPosition={setPosition} />
            {imageUrl && <img src={imageUrl} alt="satellite-photo" />}
            <FavouriteLocations position={position} />
        </div>
    );
};

export default EarthImageryPage;
