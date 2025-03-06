import InteractiveMap from "@/components/InteractiveMap/InteractiveMap";
import { getSatellitePhoto } from "@/services/earthImageryApi";
import { SatellitePhotoResponse } from "@/types/eartImagery";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import "./EarthImageryPage.css";

const EarthImageryPage = () => {
    const [imageUrl, setImageUrl] = useState<string | undefined>();
    const [position, setPosition] = useState<LatLngExpression>([51.5, -0.09]);

    useEffect(() => {
        loadImageUrl();
    }, [position]);

    async function loadImageUrl() {
        const newImageUrl: SatellitePhotoResponse = await getSatellitePhoto(
            position
        );
        console.log(newImageUrl);
        setImageUrl(newImageUrl.url);
    }

    return (
        <div className="earth-imagery-page">
            <InteractiveMap position={position} setPosition={setPosition} />
            {imageUrl && <img src={imageUrl} alt="satellite-photo" />}
        </div>
    );
};

export default EarthImageryPage;
