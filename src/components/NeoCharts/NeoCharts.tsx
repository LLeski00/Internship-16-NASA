import { FC } from "react";
import { NeoHistogram, NeoPieChart } from "@/components";
import { NeoData } from "@/types/neo";
import { HazardChartType, HistogramType } from "@/types/chart";
import "./NeoCharts.css";

interface NeoChartsProps {
    neoData: NeoData | null;
}

const NeoCharts: FC<NeoChartsProps> = ({ neoData }) => {
    const pieChartData: HazardChartType[] = getPieChartData();
    const histogramData: HistogramType[] = getHistogramData();

    function getPieChartData(): HazardChartType[] {
        if (!neoData) return [];

        let { hazardousCount, nonHazardousCount } = Object.values(neoData)
            .flat()
            .reduce(
                (counts, neo) => {
                    neo.is_potentially_hazardous_asteroid
                        ? counts.hazardousCount++
                        : counts.nonHazardousCount++;
                    return counts;
                },
                { hazardousCount: 0, nonHazardousCount: 0 }
            );

        return [
            { name: "Hazardous", value: hazardousCount },
            { name: "Non-Hazardous", value: nonHazardousCount },
        ];
    }

    function getHistogramData(): HistogramType[] {
        if (!neoData) return [];

        const sizeCounter = { small: 0, medium: 0, large: 0 };

        Object.values(neoData)
            .flat()
            .forEach((neo) => {
                if (neo.estimated_diameter.meters.estimated_diameter_max <= 50)
                    sizeCounter.small++;
                else if (
                    neo.estimated_diameter.meters.estimated_diameter_max <= 200
                )
                    sizeCounter.medium++;
                else sizeCounter.large++;
            });

        return [
            { name: "Small (0-50)", count: sizeCounter.small },
            { name: "Medium (51-200)", count: sizeCounter.medium },
            { name: "Large (201+)", count: sizeCounter.large },
        ];
    }

    return (
        <>
            {neoData && (
                <div className="neo-charts">
                    <h2>Pie chart of hazardous/unhazardous NEOs</h2>
                    <NeoPieChart chartData={pieChartData} />
                    <h2>Histogram of categorized NEOs by size in meters</h2>
                    <NeoHistogram chartData={histogramData} />
                </div>
            )}
        </>
    );
};

export default NeoCharts;
