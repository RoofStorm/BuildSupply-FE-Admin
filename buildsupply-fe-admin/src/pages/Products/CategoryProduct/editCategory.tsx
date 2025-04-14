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
import { Textarea } from "@/components/lib/textarea"


export default function EditCategory({
  open= false,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="sm:max-w-[600px]" >
        <SheetHeader>
          <SheetTitle>Sửa thông tin Danh mục</SheetTitle>
          <SheetDescription>
            Điền thông tin bên dưới để sửa thông tin danh mục. Nhấn lưu khi hoàn tất.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 p-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="productName" className="text-right text-nowrap">
              Tên Danh mục
            </Label>
            <Input
              id="productName"
              placeholder="Nhập tên sản phẩm"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="productName" className="text-right text-nowrap">
              Danh mục cha
            </Label>
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Chọn danh mục cha" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Danh mục cha</SelectLabel>
                  <SelectItem value="tools">Dụng cụ</SelectItem>
                  <SelectItem value="electronics">Điện tử</SelectItem>
                  <SelectItem value="furniture">Nội thất</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="categoryImage" className="text-right">
              Hình ảnh
            </Label>
            <Input id="categoryImage" type="file"  className="col-span-3"/>
          </div>
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
          <Button type="submit" onClick={() => setOpen(false)}>
          Lưu Danh Mục</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
      </Sheet>
  );
}
