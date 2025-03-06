import { FC } from "react";
import { PieChart } from "@/components";
import { Neo, NeoData } from "@/types/neo";
import { ChartData, HazardChartType } from "@/types/chart";
import NeoBarChart from "../NeoBarChart/NeoBarChart";
import NeoPieChart from "../NeoPieChart/NeoPieChart";

interface NeoChartsProps {
    neoData: NeoData;
}

const NeoCharts: FC<NeoChartsProps> = ({ neoData }) => {
    const barChartData: ChartData[] = getBarChartData();
    const pieChartData: HazardChartType[] = getPieChartData();

    function getBarChartData(): ChartData[] {
        return Object.entries(neoData)
            .map(([date, neos]) => ({
                date,
                count: neos.length,
            }))
            .sort(
                (a, b) =>
                    new Date(a.date).getTime() - new Date(b.date).getTime()
            );
    }

    function getPieChartData(): HazardChartType[] {
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

    return (
        <div className="neo-charts">
            <NeoBarChart chartData={barChartData} />
            <NeoPieChart chartData={pieChartData} />
        </div>
    );
};

export default NeoCharts;
