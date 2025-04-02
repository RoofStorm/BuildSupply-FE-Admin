import { BrowserRouter as Router } from "react-router-dom";
import AppSidebar from "@/components/layout/Sidebar";
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <AppSidebar />
        {/* Main Content */}
        <div className="ml-64 p-8 flex-1 bg-gray-100 min-h-screen">
            <AppRoutes/>
        </div>
      </div>
    </Router>
  );
}

export default App;