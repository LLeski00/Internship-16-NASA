import { withLoading } from "@/hoc/WithLoading";
import { Neo } from "@/types/neo";
import { FC } from "react";

interface NeoListProps {
    neos: Neo[];
    isLoading: boolean;
}

const NeoList: FC<NeoListProps> = ({ neos }) => {
    return (
        <div className="neo-list">
            {neos.map((neo) => (
                <p key={neo.id}>{neo.name}</p>
            ))}
        </div>
    );
};

export const NeoListWithLoading = withLoading(NeoList);
