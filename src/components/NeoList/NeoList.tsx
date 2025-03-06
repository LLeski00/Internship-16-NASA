import { Neo } from "@/types/neo";
import { FC } from "react";

interface NeoListProps {
    neos: Neo[];
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

export default NeoList;
