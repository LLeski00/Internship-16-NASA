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

type RoverFilterType = {
    rover: string;
    camera: string;
};

export { Rover, Camera, RoverResponse, RoverFilterType };
