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
import AddProduct from "./AddAccount";
import { AccountTable } from "./AccountTable";
import data from "./data.json";

export default function Accounts() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Accounts</h1>
        <AddProduct />
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
        {/* Search Input */}
        <div className="grid w-full md:w-1/2 items-center gap-1.5 ">
          <Label htmlFor="email">Tìm kiếm</Label>
          <Input
            type="email"
            id="email"
            placeholder="Tìm kiếm tên,phone,email,username,..."
          />
        </div>
        {/* Filter Zone */}
        {/* Filter by Category */}
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Chọn vai trò" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Vai trò</SelectLabel>
              <SelectItem value="tools">Admin</SelectItem>
              <SelectItem value="electronics">Customer</SelectItem>
              <SelectItem value="furniture">SuperAdmin</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* Filter by Status */}
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Chọn Trạng thái" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Trạng thái</SelectLabel>
              <SelectItem value="active">Hoạt động</SelectItem>
              <SelectItem value="inactive">Không hoạt động</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {/* Product Table Section */}
      <div>
        <AccountTable data={data} />
      </div>
    </div>
  );
}
