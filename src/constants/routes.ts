import { Routes } from "@/types/route";
import apodImage from "@/assets/images/solar-eclipse.jpg";
import marsRoverImage from "@/assets/images/mars-rover.jpg";
import neoImage from "@/assets/images/asteroid.jpg";
import earthImage from "@/assets/images/earthHQ.jpg";
import detailsImage from "@/assets/images/rocketship.jpg";

const routes: Routes = {
    HOME: {
        path: "/",
        name: "Home",
        description: "Home page",
        image: "",
        isMainRoute: true,
    },
    APOD: {
        path: "/apod",
        name: "Astronomy Picture of the Day (APOD)",
        description: "APOD page",
        image: apodImage,
        isMainRoute: true,
    },
    MARS_ROVER: {
        path: "/mars-rover",
        name: "Mars Rover Photos",
        description: "Photos taken by the Rover on Mars",
        image: marsRoverImage,
        isMainRoute: true,
    },
    NEO: {
        path: "/neo",
        name: "Near Earth Objects (NEO) Tracker",
        description: "Near Earth Objects (NEO) Tracker",
        image: neoImage,
        isMainRoute: true,
    },
    EARTH_IMAGERY: {
        path: "/earth-imagery",
        name: "Earth Imagery",
        description: "Earth Imagery",
        image: earthImage,
        isMainRoute: true,
    },
    IMAGE_DETAILS: {
        path: "/images/:date",
        name: "Image details",
        description: "Details of an image",
        image: "",
        isMainRoute: false,
    },
    MARS_ROVER_IMAGE_DETAILS: {
        path: "mars-rover/images/:id",
        name: "Mars Rover Image details",
        description: "Details of a mars rover image",
        image: "",
        isMainRoute: false,
    },
    DETAILS: {
        path: "/details/:name",
        name: "Details",
        description: "Details about the objects of the app",
        image: detailsImage,
        isMainRoute: false,
    },
    NOT_FOUND: {
        path: "*",
        name: "Not found",
        description: "Displays the not found page when the url is invalid",
        image: "",
        isMainRoute: false,
    },
};

export { routes };
