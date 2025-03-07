import { withLoading } from "@/hoc/WithLoading";
import { useMarsRover } from "@/hooks/UseMarsRover";
import { Rover } from "@/types/mars";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FC } from "react";

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
        <>
            {selectedRover && (
                <Select
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
            )}
        </>
    );
};

export default RoverCameraFilter;
