import { withLoading } from "@/hoc/WithLoading";
import { Neo } from "@/types/neo";
import { FC, useEffect } from "react";

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
                <p key={neo.id}>{neo.name}</p>
            ))}
        </div>
    );
};

export const NeoListWithLoading = withLoading(NeoList);
