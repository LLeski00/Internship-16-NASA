import { HistogramType } from "@/types/chart";
import { FC } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

interface NeoHistogramProps {
    chartData: HistogramType[];
}

const NEOSizeHistogram: FC<NeoHistogramProps> = ({ chartData }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default NEOSizeHistogram;
