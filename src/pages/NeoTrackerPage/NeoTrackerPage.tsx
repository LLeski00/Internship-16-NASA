import { NeoChartsWithLoading, NeoListWithLoading } from "@/components";
import { getNeos } from "@/services/neoApi";
import { Neo, NeoData } from "@/types/neo";
import { useEffect, useState } from "react";

const NeoTrackerPage = () => {
    const [neoData, setNeoData] = useState<NeoData | null>(null);
    const [neos, setNeos] = useState<Neo[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        loadNeos();
    }, []);

    async function loadNeos() {
        setIsLoading(true);
        const newNeos: NeoData | null = await getNeos();
        if (!newNeos) return;
        setNeoData(newNeos);
        setNeos(Object.values(newNeos).flat());
        setIsLoading(false);
    }

    return (
        <div className="neo-tracker-page">
            <NeoChartsWithLoading neoData={neoData} isLoading={isLoading} />
            <NeoListWithLoading neos={neos} isLoading={isLoading} />
        </div>
    );
};

export default NeoTrackerPage;
