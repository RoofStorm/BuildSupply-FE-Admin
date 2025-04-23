import { Button } from "@/components/lib/button";
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
import { PlusIcon } from "lucide-react";
import { InputUI } from "@/components/ui/Input";
import SelectUI from "@/components/ui/Select";
import { customerStatusOptions } from "@/constants/customer.constant";

export default function AddCustomer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <PlusIcon />
          <span className="hidden lg:inline">Thêm Khách Hàng</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[600px]">
        <SheetHeader>
          <SheetTitle>Thêm Khách Hàng</SheetTitle>
          <SheetDescription>
            Điền thông tin bên dưới để thêm khách hàng mới. Nhấn lưu khi hoàn
            tất.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 p-4">
          {/* Name */}
          <InputUI
            label="Tên Khách Hàng"
            id="customerName"
            placeholder="Nhập tên khách hàng"
            className="grid grid-cols-4 items-center gap-4"
            inputClassName="col-span-3"
          />

          {/* Phone */}
          <InputUI
            label="Số Điện Thoại"
            id="customerPhone"
            placeholder="Nhập số điện thoại"
            type="tel"
            className="grid grid-cols-4 items-center gap-4"
            inputClassName="col-span-3"
          />
          {/* Email */}
          <InputUI
            label="Email"
            id="customerEmail"
            placeholder="Nhập email khách hàng"
            className="grid grid-cols-4 items-center gap-4"
            inputClassName="col-span-3"
          />
          {/* Address */}
          <InputUI
            label="Địa Chỉ"
            id="customerAddress"
            placeholder="Nhập địa chỉ khách hàng"
            className="grid grid-cols-4 items-center gap-4"
            inputClassName="col-span-3"
          />
          {/* Status */}
          <SelectUI
            label="Trạng Thái"
            placeholder="Chọn trạng thái"
            selectLabel="Trạng Thái"
            options={customerStatusOptions}
            className="grid grid-cols-4 items-center gap-4"
          />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600"
            >
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
