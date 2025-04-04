import { AppSidebar } from "@/components/layout/Sidebar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SidebarInset, SidebarProvider } from "@/components/lib/sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <main className="p-3">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Layout;
