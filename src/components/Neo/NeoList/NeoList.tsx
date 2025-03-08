import { withLoading } from "@/hoc/WithLoading";
import { Neo } from "@/types";
import { FC, useEffect } from "react";
import "./NeoList.css";

interface NeoListProps {
    neos: Neo[];
    isLoading: boolean;
    error: Error | null;
}

const NeoList: FC<NeoListProps> = ({ neos, error }) => {
    useEffect(() => {
        if (error) throw new Error(error.message);
    }, [error]);

    return (
        <div className="neo-list">
            {neos.map((neo) => (
                <div className="neo" key={neo.id}>
                    <h3>{neo.name}</h3>
                    <p>
                        {neo.is_potentially_hazardous_asteroid
                            ? "Hazardous"
                            : "Unhazardous"}
                    </p>
                    <p>
                        Min diameter:{" "}
                        {neo.estimated_diameter.meters.estimated_diameter_min}m
                    </p>
                </div>
            ))}
        </div>
    );
};

export const NeoListWithLoading = withLoading(NeoList);
