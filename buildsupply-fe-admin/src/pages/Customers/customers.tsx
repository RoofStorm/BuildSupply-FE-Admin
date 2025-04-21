import { Input } from "@/components/lib/input";
import { Label } from "@/components/lib/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/lib/select";
import AddCustomers from "./AddCustomer";
import { CustomerTable } from "./customerTable";
import data from "./data.json";

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
        <div className="grid w-full md:w-1/2 items-center gap-1.5">
          <Label htmlFor="search">Tìm kiếm khách hàng</Label>
          <Input type="text" id="search" placeholder="Tìm kiếm khách hàng..." />
        </div>

        {/* Filter Zone */}
        <div className="flex flex-wrap gap-4">
          {/* Filter by Category */}
          <Select>
            <SelectTrigger id="category">
              <SelectValue placeholder="Chọn loại khách hàng" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Trạng thái khách hàng</SelectLabel>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="new">Khách hàng mới</SelectItem>
                <SelectItem value="loyal">Khách hàng thân thiết</SelectItem>
                <SelectItem value="active">Hoạt động</SelectItem>
                <SelectItem value="locked">Đã khóa</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Product Table Section */}
      <div>
        <CustomerTable data={data} />
      </div>
    </div>
  );
}
