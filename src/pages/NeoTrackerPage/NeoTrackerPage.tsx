import { NeoCharts, NeoListWithLoading } from "@/components";
import { ErrorFallback } from "@/error/ErrorFallback";
import { useErrorHandler } from "@/hooks";
import { getNeos } from "@/services/neoApi";
import { Neo, NeoData } from "@/types/neo";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

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
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <NeoCharts neoData={neoData} />
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
