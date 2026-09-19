"use client";

import {
    Area,
    AreaChart as RechartsAreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

type ChartData = {
    label: string;
    commit: number;
};

const data: ChartData[] = [
    { label: "Mon", commit: 40 },
    { label: "Tue", commit: 33 },
    { label: "Wed", commit: 18 },
    { label: "Thr", commit: 45 },
    { label: "Fri", commit: 39 },
    { label: "Sat", commit: 22 },
    { label: "Sun", commit: 9 },
];

type AreaChartProps = {
    isAnimationActive?: boolean;
};

const AreaChart = ({
    isAnimationActive = true,
}: AreaChartProps) => {
    return (
        <div className="w-full h-40 p-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.5),0_12px_40px_rgba(0,0,0,1)]">
            <ResponsiveContainer width="100%" height="100%">
                <RechartsAreaChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 10,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="colorX" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="#06923E"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#06923E"
                                stopOpacity={0}
                            />
                        </linearGradient>

                        <linearGradient id="colorY" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="#06923E"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#06923E"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" stroke="#1F7D53" strokeOpacity={0.5} />

                    <XAxis
                        dataKey="label"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12 }}
                    />

                    <YAxis
                        width="auto"
                        domain={[0, 60]}
                        ticks={[0, 20, 40, 60]}
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

                    <Area
                        type="monotone"
                        dataKey="commit"
                        stroke="#06923E"
                        activeDot={{ stroke: "#ffffff" }}
                        fillOpacity={1}
                        fill="url(#colorY)"
                        isAnimationActive={isAnimationActive}
                    />
                </RechartsAreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AreaChart;