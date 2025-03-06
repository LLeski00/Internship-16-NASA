import { ChartData } from "@/types/chart";
import { FC } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    DefaultTooltipContent,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";

interface NeoBarChartProps {
    chartData: ChartData[];
}

const NeoBarChart: FC<NeoBarChartProps> = ({ chartData }) => {
    return (
        <div className="bar-chart">
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <DefaultTooltipContent />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default NeoBarChart;
