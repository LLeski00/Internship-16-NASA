type SatellitePhotoResponse = {
    id: string;
    date: string;
    resource: {
        dataset: string;
        planet: string;
    };
    service_version: string;
    url: string;
};

type Coordinates = {
    latitude: number;
    longitude: number;
};

export { Coordinates, SatellitePhotoResponse };
