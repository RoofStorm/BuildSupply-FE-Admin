import { Input } from "@/components/lib/input"
import { Label } from "@/components/lib/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/lib/select"
import AddProduct from "./addProduct"
import { ProductTable } from "./productTable"
import data from "./data.json"



function Products() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <AddProduct/>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
        {/* Search Input */}
        <div className="grid w-full md:w-1/2 items-center gap-1.5 ">
          <Label htmlFor="email">Tìm kiếm sản phẩm</Label>
          <Input type="email" id="email" placeholder="Tìm kiếm sản phẩm..." />
        </div>

        {/* Filter Zone */}

          {/* Filter by Category */}
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Chọn danh mục" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Danh mục</SelectLabel>
                <SelectItem value="tools">Dụng cụ</SelectItem>
                <SelectItem value="electronics">Điện tử</SelectItem>
                <SelectItem value="furniture">Nội thất</SelectItem>
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
                <SelectItem value="tools">Dụng cụ</SelectItem>
                <SelectItem value="electronics">Còn hàng</SelectItem>
                <SelectItem value="furniture">Hết hàng</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
      </div>
      {/* Product Table Section */}
      <div>
        <ProductTable data={data}/>
      </div>
    </div>
  );
}

export default Products;