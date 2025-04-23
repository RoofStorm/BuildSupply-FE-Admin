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
import { categoryOptions } from "@/constants/product.constant";

export default function AddProduct() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <PlusIcon />
          <span className="hidden lg:inline">Thêm Sản Phẩm</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[600px]">
        <SheetHeader>
          <SheetTitle>Thêm Sản Phẩm</SheetTitle>
          <SheetDescription>
            Điền thông tin bên dưới để thêm sản phẩm mới. Nhấn lưu khi hoàn tất.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 p-4">
          <InputUI
            id="productName"
            label="Tên Sản Phẩm"
            placeholder="Nhập tên sản phẩm"
            inputClassName="col-span-3"
            className="grid grid-cols-4 items-center gap-4"
          />
          <InputUI
            id="productImage"
            label="Hình ảnh"
            placeholder="Chọn hình ảnh sản phẩm"
            type="file"
            inputClassName="col-span-3"
            className="grid grid-cols-4 items-center gap-4"
          />
          <div className="grid grid-cols-4 items-center gap-4">
            <SelectUI
              label="Danh mục"
              placeholder="Chọn danh mục"
              selectLabel="Danh mục"
              options={categoryOptions}
            />
          </div>
          <InputUI
            label="Giá"
            id="productPrice"
            type="number"
            placeholder="Nhập giá sản phẩm"
            inputClassName="col-span-3"
            className="grid grid-cols-4 items-center gap-4"
          />
          <InputUI
            label="Mô Tả"
            id="productDescription"
            placeholder="Nhập mô tả sản phẩm"
            inputClassName="col-span-3"
            className="grid grid-cols-4 items-center gap-4"
          />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Lưu Sản Phẩm</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
