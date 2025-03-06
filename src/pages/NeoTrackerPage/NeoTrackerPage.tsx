import { getNeos } from "@/services/neoApi";
import { Neo } from "@/types/neo";
import { useEffect, useState } from "react";

const NeoTrackerPage = () => {
    const [neos, setNeos] = useState<Neo[]>([]);

    useEffect(() => {
        loadNeos();
    }, []);

    async function loadNeos() {
        const newNeos: Neo[] = await getNeos();
        setNeos(newNeos);
    }

    return (
        <div className="neo-tracker-page">
            {neos.map((neo) => (
                <p key={neo.id}>{neo.name}</p>
            ))}
        </div>
    );
};

export default NeoTrackerPage;
