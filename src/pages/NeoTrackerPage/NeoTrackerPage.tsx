import NeoCharts from "@/components/NeoCharts/NeoCharts";
import NeoList from "@/components/NeoList/NeoList";
import PieChart from "@/components/NeoPieChart/NeoPieChart";
import { getNeos } from "@/services/neoApi";
import { Neo, NeoData } from "@/types/neo";
import { useEffect, useState } from "react";

const NeoTrackerPage = () => {
    const [neoData, setNeoData] = useState<NeoData | null>();
    const [neos, setNeos] = useState<Neo[]>([]);

    useEffect(() => {
        loadNeos();
    }, []);

    async function loadNeos() {
        const newNeos: NeoData | null = await getNeos();
        if (!newNeos) return;
        setNeoData(newNeos);
        setNeos(Object.values(newNeos).flat());
    }

    return (
        <div className="neo-tracker-page">
            {neoData && <NeoCharts neoData={neoData} />}
            {neos && <NeoList neos={neos} />}
        </div>
    );
};

export default NeoTrackerPage;
