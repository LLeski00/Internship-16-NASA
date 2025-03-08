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
        description: "",
        summary: "",
        image: "",
        isMainRoute: true,
    },
    APOD: {
        path: "/apod",
        name: "Astronomy Picture of the Day (APOD)",
        description:
            "APOD showcases NASA's Astronomy Picture of the Day, featuring a new image or photo from space every day, accompanied by a brief explanation written by professional astronomers. Users can explore this vast collection of stunning space imagery and filter the photos by specific dates.",
        summary:
            "The APOD section of the website offers a daily cosmic experience, where users can explore captivating space images and gain insights into the universe's wonders. Filters allow users to find photos from particular dates, enhancing the educational and visual experience.",
        image: apodImage,
        isMainRoute: true,
    },
    MARS_ROVER: {
        path: "/mars-rover",
        name: "Mars Rover Photos",
        description:
            "This section allows users to explore images taken by the active Mars rovers, such as Perseverance and Curiosity. Users can filter the photos by the specific rover and camera used, offering a deep dive into the Martian landscape captured by these robotic explorers.",
        summary:
            "Mars Rover Photos brings the Red Planet closer to home by allowing users to view high-quality images from Mars rovers. The ability to filter by rover and camera adds a layer of interactivity and discovery, making it easier to explore the Martian surface and ongoing space exploration missions.",
        image: marsRoverImage,
        isMainRoute: true,
    },
    NEO: {
        path: "/neo",
        name: "Near Earth Objects (NEO) Tracker",
        description:
            "NEO Tracker provides detailed information on near-Earth objects (NEOs), including asteroids and comets that pass close to Earth's orbit. This section visualizes NEO data through graphs, helping users track these objects and understand their potential impact.",
        summary:
            "NEO Tracker offers a comprehensive view of near-Earth objects, allowing users to explore detailed data about asteroids and comets. The visualization of this data through graphs enhances understanding, highlighting the importance of monitoring these objects for planetary defense.",
        image: neoImage,
        isMainRoute: true,
    },
    EARTH_IMAGERY: {
        path: "/earth-imagery",
        name: "Earth Imagery",
        description:
            "Earth Imagery features an interactive map that lets users select a location on Earth and view satellite images of that area. This feature allows for a deeper understanding of global landscapes and environmental conditions through real-time or archived imagery.",
        summary:
            "Earth Imagery provides users with a dynamic way to explore satellite images of any chosen location on Earth. The interactive map enables exploration of global environments, aiding in educational, scientific, and practical applications.",
        image: earthImage,
        isMainRoute: true,
    },
    IMAGE_DETAILS: {
        path: "/apod/images/:date",
        name: "Image details",
        description: "",
        summary: "",
        image: "",
        isMainRoute: false,
    },
    DETAILS: {
        path: "/details/:name",
        name: "Details",
        description: "",
        summary: "",
        image: detailsImage,
        isMainRoute: false,
    },
    NOT_FOUND: {
        path: "*",
        name: "Not found",
        description: "",
        summary: "",
        image: "",
        isMainRoute: false,
    },
};

export { routes };
