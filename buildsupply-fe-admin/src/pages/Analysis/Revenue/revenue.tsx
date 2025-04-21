"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", revenue: 186, orderNumbs: 80 },
  { month: "February", revenue: 305, orderNumbs: 200 },
  { month: "March", revenue: 237, orderNumbs: 120 },
  { month: "April", revenue: 73, orderNumbs: 190 },
  { month: "May", revenue: 209, orderNumbs: 130 },
  { month: "June", revenue: 214, orderNumbs: 140 },
  { month: "July", revenue: 186, orderNumbs: 80 },
  { month: "August", revenue: 305, orderNumbs: 200 },
  { month: "September", revenue: 237, orderNumbs: 120 },
  { month: "October", revenue: 73, orderNumbs: 190 },
  { month: "November", revenue: 209, orderNumbs: 130 },
  { month: "December", revenue: 214, orderNumbs: 140 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "green",
  },
  orderNumbs: {
    label: "Order Numbs",
    color: "blue",
  },
} satisfies ChartConfig;

export default function RevenueAnalysis() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold mb-2">Revenue</h1>
      <Card>
        <CardHeader>
          <CardTitle>Bar Chart - Revenue & order numbers</CardTitle>
          <CardDescription>January - December 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="revenue" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="orderNumbs" fill="blue" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total revenue and order numbers for the last 12 months.
          </div>
        </CardFooter>
      </Card>
      <Top10ProductChart />
    </div>
  );
}

const Top10ProductChart = () => {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
    label: {
      color: "hsl(var(--background))",
    },
  } satisfies ChartConfig;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 10 products sales</CardTitle>
        <CardDescription>Tính đến tháng hiện tại</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="desktop" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="desktop"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="desktop"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};
