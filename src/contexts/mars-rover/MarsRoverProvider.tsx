import { FC, PropsWithChildren, useState } from "react";
import { Rover, RoverFilterType } from "@/types/mars";
import { MarsRoverContext } from "./MarsRoverContext";

export const MarsRoverProvider: FC<PropsWithChildren> = ({ children }) => {
    const [roverFilter, setRoverFilter] = useState<RoverFilterType>({
        rover: "",
        camera: "",
        page: 1,
    });
    const [rovers, setRovers] = useState<Rover[]>([]);

    return (
        <MarsRoverContext.Provider
            value={{
                rovers,
                setRovers,
                roverFilter,
                setRoverFilter,
            }}
        >
            {children}
        </MarsRoverContext.Provider>
    );
};
