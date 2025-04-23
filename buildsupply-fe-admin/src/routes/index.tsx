import { Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Products from "@/pages/Products/ProductsList/Products";
import Orders from "@/pages/Orders/Orders";
import Customers from "@/pages/Customers/Customers";
import Accounts from "@/pages/Accounts/Accounts";
import Setting from "@/pages/Setting";
import Categories from "@/pages/Products/CategoryProduct/Categories";
import RevenueAnalysis from "@/pages/Analysis/Revenue/Revenue";
import InventoryAnalysis from "@/pages/Analysis/Inventory/InventoryAnalasys";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/revenue" element={<RevenueAnalysis />} />
      <Route path="/inventory" element={<InventoryAnalysis />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
}

export default AppRoutes;
