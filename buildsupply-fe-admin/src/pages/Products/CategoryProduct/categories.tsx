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
import AddCategory from "./addCategory";
import { CategoryTable } from "./categoryTable";
import data from "./data.json";

export default function Categories() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Category</h1>
        <AddCategory />
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
        {/* Search Input */}
        <div className="grid w-full md:w-1/2 items-center gap-1.5 ">
          <Label htmlFor="email">Tìm kiếm danh mục</Label>
          <Input type="email" id="email" placeholder="Tìm kiếm danh mục..." />
        </div>
        {/* Filter Zone */}
        {/* Filter by Status */}
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Chọn Trạng thái" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Trạng thái</SelectLabel>
              <SelectItem value="tools">Dụng cụ</SelectItem>
              <SelectItem value="electronics">Còn hàng</SelectItem>
              <SelectItem value="furniture">Hết hàng</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {/* Product Table Section */}
      <div>
        <CategoryTable data={data} />
      </div>
    </div>
  );
}
