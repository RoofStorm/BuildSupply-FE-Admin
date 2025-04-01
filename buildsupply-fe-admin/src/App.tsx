import DashboardLayout from "@/pages/Dashboard";

function App() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-bold mb-4">Tổng quan</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold">Tổng doanh thu</h2>
            <p className="text-2xl text-green-600">₫50,000,000</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold">Số đơn hàng</h2>
            <p className="text-2xl text-red-600">120</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold">Sản phẩm tồn kho</h2>
            <p className="text-2xl text-yellow-600">8</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold">Khách hàng mới</h2>
            <p className="text-2xl text-blue-600">25</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;