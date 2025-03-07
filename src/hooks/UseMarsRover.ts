import { useContext } from "react";
import { MarsRoverContext, MarsRoverContextType } from "@/contexts";

export const useMarsRover = (): MarsRoverContextType => {
    const context = useContext(MarsRoverContext);

    if (!context) {
        throw new Error("useMarsRover must be used within a MarsRoverProvider");
    }

    return context;
};
