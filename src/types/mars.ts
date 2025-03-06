type Camera = {
    id: number;
    name: string;
    full_name: string;
    rover_id: number;
};

type Rover = {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    max_date: string;
    max_sol: number;
    status: string;
    total_photos: number;
    cameras: Camera[];
};

type RoverResponse = {
    rovers: Rover[];
};

type RoverImageResponse = {
    photos: RoverImageData[];
};

type RoverImageData = {
    camera: Camera;
    earth_date: string;
    id: number;
    img_src: string;
    rover: Rover;
    sol: number;
};

type RoverFilterType = {
    rover: string;
    camera: string;
    page: number;
};

export {
    Rover,
    Camera,
    RoverResponse,
    RoverImageResponse,
    RoverImageData,
    RoverFilterType,
};
