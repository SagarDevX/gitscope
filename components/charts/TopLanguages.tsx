"use client";

import { h3, span } from "motion/react-client";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const COLORS = ["#54e346", "#3178c6", "#f7df1e", "#8b5cf6", "#888"];

export default function TopLanguages({
    languages,
}: {
    languages: { name: string; value: number }[];
}) {
    if (!languages || languages.length === 0) {
        return null;
    }

    return ( 
        <div className="w-93 md:w-full rounded-2xl border border-neutral-200 py-6 px-7">
            <h2 className="text-2xl  font-semibold">
                Top Languages
            </h2>

            <p className="text-md md:text-sm text-gray-500">
                Language distribution across repositories
            </p>

            <div className="w-full flex items-center justify-center">
                <div className=" size-58 ">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={languages}
                                dataKey="value"
                                nameKey="name"
                                innerRadius={56}
                                outerRadius={77}
                            >
                                {languages.map((_, index) => (
                                    <Cell
                                        key={index}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>

                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#ffffff",
                                    border: "1px solid #EEEEEE",
                                    borderRadius: "10px",
                                    color: "#EEE",
                                }}
                                labelStyle={{
                                    color: "#000000",
                                    fontWeight: 600,
                                }}
                                itemStyle={{
                                    color: "#000000",
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>


            <div className=" text-xl md:text-sm grid grid-cols-2 md:grid-cols-3 gap-2">
                {languages.map((item, idx) => (
                    <div key={item.name} className="flex items-center gap-2 justify-start text-center">
                        <span
                            className="size-2 rounded-full"
                            style={{
                                backgroundColor: COLORS[idx % COLORS.length],
                            }}
                        />
                        <h3>{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}