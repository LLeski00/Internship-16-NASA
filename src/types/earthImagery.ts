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

export { SatellitePhotoResponse };
