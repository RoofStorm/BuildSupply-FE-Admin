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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/lib/table"
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

      {/* Product List Section */}
      <div>
        {/* Placeholder for product list */}
        <Table>
          <TableCaption>Danh sách sản phẩm hiện tại.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Mã sản phẩm</TableHead>
              <TableHead>Tên sản phẩm</TableHead>
              <TableHead>Danh mục</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead className="text-right">Giá</TableHead>
              <TableHead className="text-right">Số lượng tồn kho</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">SP001</TableCell>
              <TableCell>Búa</TableCell>
              <TableCell>Dụng cụ</TableCell>
              <TableCell>Còn hàng</TableCell>
              <TableCell className="text-right">100,000₫</TableCell>
              <TableCell className="text-right">50</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">SP002</TableCell>
              <TableCell>Máy khoan</TableCell>
              <TableCell>Điện tử</TableCell>
              <TableCell>Hết hàng</TableCell>
              <TableCell className="text-right">1,500,000₫</TableCell>
              <TableCell className="text-right">0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">SP003</TableCell>
              <TableCell>Bàn làm việc</TableCell>
              <TableCell>Nội thất</TableCell>
              <TableCell>Còn hàng</TableCell>
              <TableCell className="text-right">2,000,000₫</TableCell>
              <TableCell className="text-right">20</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">SP004</TableCell>
              <TableCell>Ghế xoay</TableCell>
              <TableCell>Nội thất</TableCell>
              <TableCell>Hết hàng</TableCell>
              <TableCell className="text-right">800,000₫</TableCell>
              <TableCell className="text-right">0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">SP005</TableCell>
              <TableCell>Đèn bàn</TableCell>
              <TableCell>Điện tử</TableCell>
              <TableCell>Còn hàng</TableCell>
              <TableCell className="text-right">300,000₫</TableCell>
              <TableCell className="text-right">100</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div>
        <ProductTable data={data}/>
      </div>
    </div>
  );
}

export default Products;