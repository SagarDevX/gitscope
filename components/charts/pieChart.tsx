"use client";

import {
    Pie,
    PieChart,
    Sector,
    Tooltip,
    PieSectorDataItem,
    TooltipIndex,
} from "recharts";

const data = [
    { name: "Web Development", value: 45, fill: "#F62440" },
    { name: "Open Source", value: 30, fill: "#0055DA" },
    { name: "UI/UX", value: 15, fill: "#FFD51E" },
    { name: "Other", value: 10, fill: "#41A67E" },
];

const renderActiveShape = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    percent,
}: PieSectorDataItem) => {
    const RADIAN = Math.PI / 180;

    const sin = Math.sin(-RADIAN * (midAngle ?? 0));
    const cos = Math.cos(-RADIAN * (midAngle ?? 0));

    const labelRadius = (outerRadius ?? 0) + 6;

    let x = (cx ?? 0) + labelRadius * cos;
    let y = (cy ?? 0) + labelRadius * sin;

    const minX = 40;
    const maxX = 120;
    const minY = 15;
    const maxY = 145;

    x = Math.max(minX, Math.min(maxX, x));
    y = Math.max(minY, Math.min(maxY, y));

    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />

            <Sector
                cx={cx}
                cy={cy}
                innerRadius={(outerRadius ?? 0) + 4}
                outerRadius={(outerRadius ?? 0) + 7}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />

            <g>
                <rect
                    x={x + (cos >= 0 ? -2 : -34)}
                    y={y - 10}
                    width={36}
                    height={20}
                    rx={6}
                    fill="rgba(0,0,0,0.65)"
                />

                <text
                    x={x + (cos >= 0 ? 16 : -16)}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#fff"
                    fontSize={11}
                    fontWeight={600}
                >
                    {`${((percent ?? 0) * 100).toFixed(0)}%`}
                </text>
            </g>
        </g>
    );
};

export default function PieChartComponent({
    isAnimationActive = true,
    defaultIndex,
}: {
    isAnimationActive?: boolean;
    defaultIndex?: TooltipIndex;
}) {
    return (
        <div className="w-fit h-fit p-2 flex flex-col rounded-2xl bg-black/2 backdrop-blur-xs border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]  ">
            <h1 className="text-lg text-white">Project focus</h1>

            <div className="w-full h-fit flex flex-row">
                <PieChart
                    responsive
                    style={{
                        width: "100%",
                        maxWidth: "130px",
                        aspectRatio: 1,
                    }}
                    margin={{
                        top: 0,
                        right: 15,
                        bottom: 0,
                        left: 0,
                    }}
                >
                    <Pie
                        activeShape={renderActiveShape}
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius="60%"
                        outerRadius="80%"
                        dataKey="value"
                        isAnimationActive={isAnimationActive}
                    />

                    <Tooltip
                        content={() => null}
                        defaultIndex={defaultIndex}
                    />
                </PieChart>

                <div className="flex flex-col items-start justify-center text-xs gap-2 text-white">
                    <h3>
                        <span className="text-[#F62440]">■</span>
                        Web Development
                    </h3>

                    <h3>
                        <span className="text-[#0055DA]">■</span>
                        Open Source
                    </h3>

                    <h3>
                        <span className="text-[#FFD51E]">■</span>
                        UI/UX
                    </h3>

                    <h3>
                        <span className="text-[#41A67E]">■</span>
                        Other
                    </h3>
                </div>
            </div>


        </div>
    );
}