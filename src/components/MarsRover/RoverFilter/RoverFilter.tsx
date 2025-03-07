import { withLoading } from "@/hoc/WithLoading";
import { useMarsRover } from "@/hooks/UseMarsRover";
import { Rover } from "@/types/mars";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { FC } from "react";

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
        <>
            <ToggleButtonGroup
                color="primary"
                value={roverFilter.rover}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                {rovers.map((rover: Rover) => (
                    <ToggleButton key={rover.id} value={rover.name}>
                        {rover.name}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </>
    );
};

export const RoverFilterWithLoading = withLoading(RoverFilter);
