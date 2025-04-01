import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBox,
  faShoppingCart,
  faUsers,
  faChartBar,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

// Menu items for the sidebar
const menuItems = [
  {
    title: "Tổng quan",
    url: "/",
    icon: faHome,
  },
  {
    title: "Sản phẩm",
    url: "/products",
    icon: faBox,
  },
  {
    title: "Đơn hàng",
    url: "orders",
    icon: faShoppingCart,
  },
  {
    title: "Khách hàng",
    url: "customers",
    icon: faUsers,
  },
  {
    title: "Doanh thu",
    url: "revenue",
    icon: faChartBar,
  },
];

const settingsItem = {
  title: "Cài đặt",
  url: "setting",
  icon: faCog,
};

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen fixed">
      <div className="p-4">
        <h1 className="text-xl font-bold">BuildSupply</h1>
      </div>
      <nav className="mt-8">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.title} className="flex items-center px-4 py-2 hover:bg-gray-700">
              <FontAwesomeIcon icon={item.icon} className="mr-3" />
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-4 w-full">
          <ul>
            <li className="flex items-center px-4 py-2 hover:bg-gray-700">
              <FontAwesomeIcon icon={settingsItem.icon} className="mr-3" />
              <a href={settingsItem.url}>{settingsItem.title}</a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;