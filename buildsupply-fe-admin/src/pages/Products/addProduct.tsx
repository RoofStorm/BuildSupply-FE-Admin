import { Button } from "@/components/lib/button"
import { Input } from "@/components/lib/input"
import { Label } from "@/components/lib/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/lib/sheet"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/lib/select"
import { PlusIcon } from "lucide-react"

export default function AddProduct() {
  return (
    <Sheet>
    <SheetTrigger asChild>
        <Button variant="outline" size="sm">
            <PlusIcon />
            <span className="hidden lg:inline">Thêm Sản Phẩm</span>
        </Button>
      {/* <Button variant="outline">Thêm Sản Phẩm</Button> */}
    </SheetTrigger>
    <SheetContent className="w-[1000px]">
      <SheetHeader>
        <SheetTitle>Thêm Sản Phẩm</SheetTitle>
        <SheetDescription>
          Điền thông tin bên dưới để thêm sản phẩm mới. Nhấn lưu khi hoàn tất.
        </SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="productName" className="text-right text-nowrap">
            Tên Sản Phẩm
          </Label>
          <Input id="productName" placeholder="Nhập tên sản phẩm" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="productName" className="text-right text-nowrap">
            Danh mục
          </Label>
          <Select>
            <SelectTrigger className="w-[280px]">
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
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="productPrice" className="text-right">
            Giá
          </Label>
          <Input id="productPrice" type="number" placeholder="Nhập giá sản phẩm" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="productDescription" className="text-right">
            Mô Tả
          </Label>
          <Input id="productDescription" placeholder="Nhập mô tả sản phẩm" className="col-span-3" />
        </div>
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Lưu Sản Phẩm</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
    </Sheet>
  )
}
