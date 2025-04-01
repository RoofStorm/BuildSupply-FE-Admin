import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 bg-gray-100 min-h-screen">
        <TopBar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;