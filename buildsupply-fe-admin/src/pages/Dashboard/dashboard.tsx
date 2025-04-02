import { BarChartLabel } from "@/components/ui/barChart";
import { SectionCards } from "./SectionCards";

function Dashboard() {
  return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards/>
        </div>
        <div className="mt-8">
          <BarChartLabel/>
        </div>
      </div>
  );
}

export default Dashboard;