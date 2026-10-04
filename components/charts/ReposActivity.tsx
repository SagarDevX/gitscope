"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function RepositoryActivity({
    data,
}: {
    data: { month: string; updates: number }[];
}) {
    if (!data || data.length === 0) {
        return null;
    }

    return (
        <div className="w-fit md:w-full rounded-2xl border border-neutral-200 p-4 md:p-6">

            <h2 className="text-2xl md:text-2xl font-semibold">
                Repository Activity
            </h2>

            <p className="text-md md:text-sm text-gray-500">
                Repository updates over time
            </p>

            <div className="mt-6 w-85 md:w-full h-56  md:h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 0,
                            left:-30,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            dataKey="month"
                            tick={{ fontSize: 12 }}
                        />

                        <YAxis
                            tick={{ fontSize: 12 }}
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#ffffff",
                                border: "1px solid #EEEEEE",
                                borderRadius: "10px",
                            }}
                            labelStyle={{
                                color: "#000000",
                                fontWeight: 600,
                            }}
                            itemStyle={{
                                color: "#000000",
                            }}
                        />

                        <Line
                            type="monotone"
                            dataKey="updates"
                            stroke="#54e346"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
}