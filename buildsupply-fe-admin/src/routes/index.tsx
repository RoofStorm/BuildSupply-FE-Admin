import { Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard/dashboard";
import Products from "@/pages/Products/ProductsList/products";
import Orders from "@/pages/Orders/orders";
import Customers from "@/pages/Customers/customers";
import Accounts from "@/pages/Accounts";
import Setting from "@/pages/Setting";
import Revenue from "@/pages/Revenue";
import Categories from "@/pages/Products/CategoryProduct/categories";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/revenue" element={<Revenue />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
}

export default AppRoutes;
