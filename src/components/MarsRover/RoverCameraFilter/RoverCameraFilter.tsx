import { useMarsRover } from "@/hooks/UseMarsRover";
import { Rover } from "@/types/mars";
import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FC } from "react";
import "./RoverCameraFilter.css";

interface RoverCameraFilterProps {
    isLoading: boolean;
}

const RoverCameraFilter: FC<RoverCameraFilterProps> = () => {
    const { rovers, roverFilter, setRoverFilter } = useMarsRover();
    const selectedRover: Rover | undefined = rovers
        ? rovers.find((rover: Rover) => rover.name === roverFilter.rover)
        : undefined;

    function handleChange(e: SelectChangeEvent<string>) {
        setRoverFilter({ ...roverFilter, camera: e.target.value, page: 1 });
    }

    return (
        <div className="rover-camera-filter">
            {selectedRover && (
                <>
                    <InputLabel id="rover-camera-label">Camera</InputLabel>
                    <Select
                        labelId="rover-camera-label"
                        id="rover-camera"
                        defaultValue=""
                        value={roverFilter.camera}
                        label="Camera"
                        onChange={handleChange}
                    >
                        <MenuItem value="">Select a camera</MenuItem>
                        {selectedRover.cameras.map((camera) => (
                            <MenuItem key={camera.id} value={camera.name}>
                                {camera.name}
                            </MenuItem>
                        ))}
                    </Select>
                </>
            )}
        </div>
    );
};

export default RoverCameraFilter;
