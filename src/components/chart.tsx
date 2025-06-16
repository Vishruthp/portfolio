"use client";
import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
const chartData = [
  { browser: "opentext", time: 0.1, fill: "var(--color-opentext)" },
  { browser: "philips", time: 3, fill: "var(--color-philips)" },
  { browser: "siemens", time: 3, fill: "var(--color-siemens)" },
  { browser: "inherit", time: 0.6, fill: "var(--color-inherit)" },
  { browser: "givevalu", time: 1, fill: "var(--color-givevalu)" },
];
const chartConfig = {
  time: {
    label: "time in years",
    color: "hsl(var(--chart-2))",
  },
  opentext: {
    label: "opentext",
    color: "hsl(var(--chart-5))",
  },
  philips: {
    label: "philips",
    color: "hsl(var(--chart-1))",
  },
  siemens: {
    label: "siemens",
    color: "hsl(var(--chart-2))",
  },
  inherit: {
    label: "inherit",
    color: "hsl(var(--chart-3))",
  },
  givevalu: {
    label: "givevalu",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;
export function CustomChart() {
  const totalVisitors = React.useMemo(() => {
    const now = new Date();
    const year2017 = new Date("2017-01-01T00:00:00");

    const diffMilliseconds = now.getFullYear() - year2017.getFullYear();
    //const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24))
    return diffMilliseconds;
  }, []);

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="time"
          nameKey="browser"
          innerRadius={60}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-2xl font-bold"
                    >
                      {totalVisitors.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground text-xs"
                    >
                      Years since SDE
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
