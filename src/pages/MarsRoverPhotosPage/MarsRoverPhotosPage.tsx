import { RoverCameraFilter, RoverFilter } from "@/components";

const MarsRoverPhotosPage = () => {
    return (
        <div className="mars-rover-photos-page">
            <h1>Mars Rover Photo Gallery</h1>
            <p>
                A Mars Rover Photos page lets you explore stunning images
                captured by NASA's Mars rovers like Curiosity, Opportunity,
                Spirit and others. You can browse photos taken on different
                Martian days (sols), filter by rover and camera type, and dive
                into the incredible landscapes and discoveries from the Red
                Planet.
            </p>
            <RoverFilter />
            <RoverCameraFilter />
        </div>
    );
};

export default MarsRoverPhotosPage;
