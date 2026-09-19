"use client";

import {
    Bar,
    BarChart as RechartsBarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

type ChartData = {
    label: string;
    commits: number;
};

const data: ChartData[] = [
    { label: "Mon", commits: 12 },
    { label: "Tue", commits: 8 },
    { label: "Wed", commits: 18 },
    { label: "Thu", commits: 6 },
    { label: "Fri", commits: 22 },
    { label: "Sat", commits: 14 },
    { label: "Sun", commits: 10 },
];

const BarChart = () => {
    return (
        <div className="w-72 h-full p-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.5),0_12px_40px_rgba(0,0,0,1)]">
            <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 20,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <XAxis
                        dataKey="label"
                        tickLine={false}
                        axisLine={false}
                         tick={{ fontSize: 12 }}
                    />

                    <YAxis
                        width="auto"
                        domain={[0, 30]}
                        ticks={[0, 5, 10,15,20,25,30]}
                        tickLine={false}
                        axisLine={false}
                         tick={{ fontSize: 12 }}
                    />

                    <Tooltip contentStyle={{
                        backgroundColor: "#EEEEEE",
                        border: "none",
                        borderRadius: "12px",
                        padding: "4px 8px",
                    }}
                        labelStyle={{
                            color: "#000000",
                            fontSize: "10px",
                        }}
                        itemStyle={{
                            color: "#06923E",
                            fontSize: "12px",
                        }} />

                    <Bar
                        dataKey="commits"
                        fill="#54E346"
                          barSize={20}
                        radius={[6, 6, 0, 0]}
                    />
                </RechartsBarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChart;