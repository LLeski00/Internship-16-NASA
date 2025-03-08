import { NeoCharts, NeoListWithLoading } from "@/components";
import { ErrorFallback } from "@/error/ErrorFallback";
import { useErrorHandler } from "@/hooks";
import { getNeos } from "@/services/neoApi";
import { Neo, NeoData } from "@/types/neo";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./NeoTrackerPage.css";
import { routes } from "@/constants/routes";

const NeoTrackerPage = () => {
    const [neoData, setNeoData] = useState<NeoData | null>(null);
    const [neos, setNeos] = useState<Neo[]>([]);
    const { error, handleError } = useErrorHandler();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        loadNeos();
    }, []);

    async function loadNeos() {
        setIsLoading(true);
        const newNeos: NeoData | null = await getNeos();
        if (!newNeos) {
            handleError(new Error("There was an issue with fetching the NEOs"));
            return;
        }
        setNeoData(newNeos);
        setNeos(Object.values(newNeos).flat());
        setIsLoading(false);
    }

    return (
        <div className="neo-tracker-page">
            <h1>{routes.NEO.name}</h1>
            <p>
                The NEO (Near-Earth Object) Tracker provides data on asteroids
                and comets that come close to Earth’s orbit. You can explore
                detailed information about their size, speed, and distance from
                our planet, and visualize this data through interactive graphs
                for better insight into their movement and potential impact.
            </p>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <NeoCharts neoData={neoData} />
                <h2>List of NEOs</h2>
                <NeoListWithLoading
                    neos={neos}
                    isLoading={isLoading}
                    error={error}
                />
            </ErrorBoundary>
        </div>
    );
};

export default NeoTrackerPage;
