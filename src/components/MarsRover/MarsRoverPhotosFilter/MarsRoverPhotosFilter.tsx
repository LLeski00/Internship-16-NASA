import { useMarsRover, useErrorHandler } from "@/hooks";
import { getActiveMarsRovers } from "@/services";
import { Rover } from "@/types";
import { useEffect, useState } from "react";
import { RoverFilterWithLoading, RoverCameraFilter } from "@/components";

const MarsRoverPhotosFilter = () => {
    const { rovers, setRovers, setRoverFilter } = useMarsRover();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { error, handleError } = useErrorHandler();

    useEffect(() => {
        if (rovers.length === 0) loadRovers();
    }, []);

    useEffect(() => {
        if (error) throw new Error(error.message);
    }, [error]);

    async function loadRovers() {
        setIsLoading(true);
        const newRovers: Rover[] | null = await getActiveMarsRovers();
        if (!newRovers) {
            handleError(
                new Error("There was an error with fetching active Mars rovers")
            );
            return;
        }
        setRovers(newRovers);
        setRoverFilter({ rover: newRovers[0].name, camera: "", page: 1 });
        setIsLoading(false);
    }

    return (
        <div className="mars-rover-photos-filter">
            <RoverFilterWithLoading isLoading={isLoading} />
            <RoverCameraFilter isLoading={isLoading} />
        </div>
    );
};

export default MarsRoverPhotosFilter;
