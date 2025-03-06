import { HazardChartType } from "@/types/chart";
import { Neo, NeoData } from "@/types/neo";
import { FC } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

interface NeoPieChartProps {
    chartData: HazardChartType[];
}

const NeoPieChart: FC<NeoPieChartProps> = ({ chartData }) => {
    const COLORS = ["#FF5733", "#33FF57"];

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                label
            >
                {chartData.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                    />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default NeoPieChart;
