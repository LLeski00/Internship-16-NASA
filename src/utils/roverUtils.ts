import { RoverFilterType } from "@/types/mars";

function createRoverApi(url: string, filters: RoverFilterType): string {
    const roverFilter = "/" + filters.rover.toLowerCase() + "/photos";
    const cameraFilter =
        filters.camera !== "" ? "&camera=" + filters.camera : "";
    const pageFilter = "&page=" + filters.page.toString();
    const solFilter = "&sol=1000";
    const api =
        url +
        roverFilter +
        "?api_key=" +
        import.meta.env.VITE_NASA_API_KEY +
        solFilter +
        pageFilter +
        cameraFilter;
    return api;
}

export { createRoverApi };
