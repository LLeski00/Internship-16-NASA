import { Rover, RoverFilterType } from "@/types";
import { createContext, Dispatch, SetStateAction } from "react";

export interface MarsRoverContextType {
    rovers: Rover[];
    setRovers: Dispatch<SetStateAction<Rover[]>>;
    roverFilter: RoverFilterType;
    setRoverFilter: Dispatch<SetStateAction<RoverFilterType>>;
}

export const MarsRoverContext = createContext<MarsRoverContextType>({
    rovers: [],
    setRovers: () => {},
    roverFilter: { rover: "", camera: "", page: 1 },
    setRoverFilter: () => {},
});
