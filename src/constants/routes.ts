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
    },
    APOD: {
        path: "/apod",
        name: "Astronomy Picture of the Day (APOD)",
        description: "APOD page",
        image: apodImage,
    },
    MARS_ROVER: {
        path: "/mars-rover",
        name: "Mars Rover Photos",
        description: "Photos taken by the Rover on Mars",
        image: marsRoverImage,
    },
    NEO: {
        path: "/neo",
        name: "Near Earth Objects (NEO) Tracker",
        description: "Near Earth Objects (NEO) Tracker",
        image: neoImage,
    },
    EARTH_IMAGERY: {
        path: "/earth-imagery",
        name: "Earth Imagery",
        description: "Earth Imagery",
        image: earthImage,
    },
    DETAILS: {
        path: "/details",
        name: "Details",
        description: "Details about the objects of the app",
        image: detailsImage,
    },
};

export { routes };
