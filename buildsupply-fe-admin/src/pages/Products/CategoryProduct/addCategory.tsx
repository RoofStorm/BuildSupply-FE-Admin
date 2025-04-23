import { Button } from "@/components/lib/button";
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

import { PlusIcon } from "lucide-react";
import { Textarea } from "@/components/lib/textarea";
import { InputUI } from "@/components/ui/Input";
import SelectUI from "@/components/ui/Select";
import { categoryOptions } from "@/constants/product.constant";

export default function AddCategory() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <PlusIcon />
          <span className="hidden lg:inline">Thêm Danh mục</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[600px]">
        <SheetHeader>
          <SheetTitle>Thêm Danh mục</SheetTitle>
          <SheetDescription>
            Điền thông tin bên dưới để thêm danh mục mới. Nhấn lưu khi hoàn tất.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 p-4">
          <InputUI
            id="categoryName"
            label="Tên Danh mục"
            placeholder="Nhập tên danh mục"
            inputClassName="col-span-3"
            className="grid grid-cols-4 items-center gap-4"
          />
          <SelectUI
            label="Danh mục cha"
            options={categoryOptions}
            className="grid grid-cols-4 items-center gap-4"
          />
          <InputUI
            id="categoryImage"
            label="Hình ảnh"
            placeholder="Chọn hình ảnh danh mục"
            type="file"
            inputClassName="col-span-3"
            className="grid grid-cols-4 items-center gap-4"
          />
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="productDescription" className="text-right">
              Mô Tả
            </Label>
            <Textarea
              id="productDescription"
              placeholder="Nhập mô tả sản phẩm"
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Lưu Danh Mục</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
