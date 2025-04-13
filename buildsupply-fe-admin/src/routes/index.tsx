import { Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard/dashboard";
import Products from "@/pages/Products/products";
import Orders from "@/pages/Orders/orders";
import Customers from "@/pages/Customers/customers";
import Revenue from "@/pages/revenue";
import Settings from "@/pages/settings";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/revenue" element={<Revenue />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default AppRoutes;
