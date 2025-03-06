import { useMarsRover } from "@/hooks/UseMarsRover";
import { getMarsRovers } from "@/services/marsApi";
import { Rover } from "@/types/mars";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect } from "react";

const RoverFilter = () => {
    const { rovers, setRovers, roverFilter, setRoverFilter } = useMarsRover();

    useEffect(() => {
        loadRovers();
    }, []);

    async function loadRovers() {
        const newRovers: Rover[] = await getMarsRovers();
        setRovers(newRovers);
        setRoverFilter({ rover: newRovers[0].name, camera: "", page: 1 });
    }

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

export default RoverFilter;
