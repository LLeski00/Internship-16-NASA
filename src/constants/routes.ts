export type RouteData = {
    path: string;
    name: string;
    description: string;
    image: string;
};

type Routes = {
    [key: string]: RouteData;
};

export const routes: Routes = {
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
        image: "",
    },
    MARS_ROVER: {
        path: "/mars-rover",
        name: "Mars Rover Photos",
        description: "Photos taken by the Rover on Mars",
        image: "",
    },
    NEO: {
        path: "/neo",
        name: "Near Earth Objects (NEO) Tracker",
        description: "Near Earth Objects (NEO) Tracker",
        image: "",
    },
    EARTH_IMAGERY: {
        path: "/earth-imagery",
        name: "Earth Imagery",
        description: "Earth Imagery",
        image: "",
    },
    DETAILS: {
        path: "/details",
        name: "Details",
        description: "Details about the objects of the app",
        image: "",
    },
};
