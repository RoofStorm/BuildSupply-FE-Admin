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

export default function AddCustomer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <PlusIcon />
          <span className="hidden lg:inline">Thêm Khách Hàng</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[600px]">
        <SheetHeader>
          <SheetTitle>Thêm Khách Hàng</SheetTitle>
          <SheetDescription>
            Điền thông tin bên dưới để thêm khách hàng mới. Nhấn lưu khi hoàn tất.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {/* Name */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="customerName" className="text-right">
              Tên Khách Hàng
            </Label>
            <Input id="customerName" placeholder="Nhập tên khách hàng" className="col-span-3" />
          </div>

          {/* Phone */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="customerPhone" className="text-right">
              Số Điện Thoại
            </Label>
            <Input id="customerPhone" type="tel" placeholder="Nhập số điện thoại" className="col-span-3" />
          </div>

          {/* Email */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="customerEmail" className="text-right">
              Email
            </Label>
            <Input id="customerEmail" type="email" placeholder="Nhập email khách hàng" className="col-span-3" />
          </div>

          {/* Address */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="customerAddress" className="text-right">
              Địa Chỉ
            </Label>
            <Input id="customerAddress" placeholder="Nhập địa chỉ khách hàng" className="col-span-3" />
          </div>

          {/* Status */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="customerStatus" className="text-right">
              Trạng Thái
            </Label>
            <Select>
              <SelectTrigger id="customerStatus" className="w-full">
                <SelectValue placeholder="Chọn trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Trạng Thái</SelectLabel>
                  <SelectItem value="active">Hoạt động</SelectItem>
                  <SelectItem value="vip">Khách hàng thân thiết</SelectItem>
                  <SelectItem value="locked">Đã khóa</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="bg-green-500 text-white hover:bg-green-600">
              Lưu Khách Hàng
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="outline">Hủy</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}