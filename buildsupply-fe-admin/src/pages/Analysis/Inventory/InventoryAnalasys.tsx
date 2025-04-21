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

export default function InventoryAnalysis() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold mb-2">Inventory</h1>
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
            biểu đồ doanh thu từng sản phẩm
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
