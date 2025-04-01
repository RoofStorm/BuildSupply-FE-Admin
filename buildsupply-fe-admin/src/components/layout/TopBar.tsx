import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function TopBar() {
  return (
    <header className="flex justify-between items-center bg-white shadow px-6 py-4">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faBell} className="w-6 h-6 text-gray-600 cursor-pointer" />
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/32"
            alt="Admin Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-700">Admin</span>
        </div>
      </div>
    </header>
  );
}

export default TopBar;