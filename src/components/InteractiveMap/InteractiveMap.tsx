import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { FC } from "react";
import "leaflet/dist/leaflet.css";
import { LatLng } from "leaflet";

interface CustomMarkerProps {
    position: LatLng;
    setPosition: Function;
}

interface InteractiveMapProps {
    position: LatLng;
    setPosition: Function;
}

const CustomMarker: FC<CustomMarkerProps> = ({ position, setPosition }) => {
    const handleMapClick = (e: any) => {
        const { lat, lng } = e.latlng;
        const newPosition: LatLng = new LatLng(lat, lng);
        setPosition(newPosition);
    };

    useMapEvents({
        click: handleMapClick,
    });

    return <Marker position={position}></Marker>;
};

const InteractiveMap: FC<InteractiveMapProps> = ({ position, setPosition }) => {
    return (
        <MapContainer
            center={position}
            zoom={13}
            style={{ width: "100%", height: "500px" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <CustomMarker position={position} setPosition={setPosition} />
        </MapContainer>
    );
};

export default InteractiveMap;
