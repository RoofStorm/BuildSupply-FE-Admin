import { Button } from "@/components/lib/button";
import { Input } from "@/components/lib/input";
import { Label } from "@/components/lib/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/lib/sheet";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/lib/select";
import { PlusIcon } from "lucide-react";

export default function AddProduct() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <PlusIcon />
          <span className="hidden lg:inline">Thêm tài khoản</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[600px]">
        <SheetHeader>
          <SheetTitle>Thêm tài khoản</SheetTitle>
          <SheetDescription>
            Điền thông tin bên dưới để thêm sản phẩm mới. Nhấn lưu khi hoàn tất.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 p-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="productName" className="text-right text-nowrap">
              Tên tài khoản
            </Label>
            <Input
              id="productName"
              placeholder="Nhập tên tài khoản"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="productName" className="text-right text-nowrap">
              Email
            </Label>
            <Input
              id="productName"
              placeholder="Nhập email"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="productName" className="text-right text-nowrap">
              Số điện thoại
            </Label>
            <Input
              id="productName"
              placeholder="Nhập số điện thoại"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="productName" className="text-right text-nowrap">
              Tên đăng nhập
            </Label>
            <Input
              id="productName"
              placeholder="Nhập Tên đăng nhập"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="productName" className="text-right text-nowrap">
              Vai trò
            </Label>
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Chọn Vai trò" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Vai trò</SelectLabel>
                  <SelectItem value="tools">Admin</SelectItem>
                  <SelectItem value="electronics">User</SelectItem>
                  <SelectItem value="furniture">Moderator</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Lưu Tài khoản</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
