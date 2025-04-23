import AddCustomers from "./AddCustomer";
import { CustomerTable } from "./CustomerTable";
import data from "./data.json";
import { InputUI } from "@/components/ui/Input";
import SelectUI from "@/components/ui/Select";
import { customerStatusOptions } from "@/constants/customer.constant";

export default function Customers() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Customers</h1>
        <AddCustomers />
      </div>
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
        {/* Search Input */}
        <InputUI
          label="Tìm kiếm khách hàng"
          id="searchCustomer"
          placeholder="Tìm kiếm khách hàng..."
          className="grid w-full md:w-1/2 items-center gap-1.5 "
        />

        {/* Filter Zone */}
        <div className="flex flex-wrap gap-4">
          {/* Filter by Category */}
          <SelectUI
            placeholder="Chọn loại khách hàng"
            label="Trang thái"
            options={customerStatusOptions}
            className="gap-1.5 grid"
          />
        </div>
      </div>
      {/* Product Table Section */}
      <div>
        <CustomerTable data={data} />
      </div>
    </div>
  );
}
