import { BarChartLabel } from "@/components/lib/barChart";
import { SectionCards } from "./sectionCards";
import { DataTable } from "./DataTable";
import data from "./data.json"

function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
      </div>
      <div className="mt-8">
        <BarChartLabel />
      </div>
      <div className="mt-8">
        <DataTable data={data} />
      </div>
    </div>
  );
}

export default Dashboard;
