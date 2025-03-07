import { useMarsRover } from "@/hooks/UseMarsRover";
import { getActiveMarsRovers } from "@/services/marsApi";
import { Rover } from "@/types/mars";
import { useEffect, useState } from "react";
import { RoverFilterWithLoading } from "../RoverFilter/RoverFilter";
import { RoverCameraFilterWithLoading } from "../RoverCameraFilter/RoverCameraFilter";

const MarsRoverPhotosFilter = () => {
    const { rovers, setRovers, setRoverFilter } = useMarsRover();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (rovers.length === 0) loadRovers();
    }, []);

    async function loadRovers() {
        setIsLoading(true);
        const newRovers: Rover[] = await getActiveMarsRovers();
        setRovers(newRovers);
        setRoverFilter({ rover: newRovers[0].name, camera: "", page: 1 });
        setIsLoading(false);
    }

    return (
        <>
            <RoverFilterWithLoading isLoading={isLoading} />
            <RoverCameraFilterWithLoading isLoading={isLoading} />
        </>
    );
};

export default MarsRoverPhotosFilter;
