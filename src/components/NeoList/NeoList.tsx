import { withLoading } from "@/hoc/WithLoading";
import { Neo } from "@/types/neo";
import { FC, useEffect } from "react";
import "./NeoList.css";
import { useNavigate } from "react-router-dom";

interface NeoListProps {
    neos: Neo[];
    isLoading: boolean;
    error: Error | null;
}

const NeoList: FC<NeoListProps> = ({ neos, error }) => {
    const navigate = useNavigate();

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
