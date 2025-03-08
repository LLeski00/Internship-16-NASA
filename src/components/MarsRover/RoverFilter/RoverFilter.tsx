import { withLoading } from "@/hoc/WithLoading";
import { useMarsRover } from "@/hooks";
import { Rover } from "@/types";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { FC } from "react";
import "./RoverFilter.css";

interface RoverFilterProps {
    isLoading: boolean;
}

const RoverFilter: FC<RoverFilterProps> = () => {
    const { rovers, roverFilter, setRoverFilter } = useMarsRover();

    function handleChange(
        e: React.MouseEvent<HTMLElement, MouseEvent>,
        selectedRover: string | null
    ) {
        if (selectedRover !== null)
            setRoverFilter({ rover: selectedRover, camera: "", page: 1 });
    }

    return (
        <div className="rover-filter">
            <ToggleButtonGroup
                color="primary"
                value={roverFilter.rover}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                {rovers &&
                    rovers.map((rover: Rover) => (
                        <ToggleButton key={rover.id} value={rover.name}>
                            {rover.name}
                        </ToggleButton>
                    ))}
            </ToggleButtonGroup>
        </div>
    );
};

export const RoverFilterWithLoading = withLoading(RoverFilter);
