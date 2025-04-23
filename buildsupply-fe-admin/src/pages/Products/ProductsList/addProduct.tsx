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
import { useState } from "react";
import { Product } from "@/types/product";

export default function AddProduct() {
  const [product, setProduct] = useState<Product>({
    name: "",
    images: [],
    category: "",
    price: "",
    description: ""
  })

  const handleChange = (value: any, field: keyof Product) => {
    setProduct({ ...product, [field]: value });
  };

  // const handleFileUpload = async () => {
  //   const formData = new FormData();
  //   product.images.forEach((file: File) => {
  //     formData.append("images", file); // Append each file to the FormData
  //   });

  //   try {
  //     const response = await fetch("https://your-server.com/upload", {
  //       method: "POST",
  //       body: formData,
  //     });
  //     const result = await response.json();
  //     console.log("Upload successful:", result);
  //   } catch (error) {
  //     console.error("Upload failed:", error);
  //   }
  // };

  const submit = () => {
    console.log(product)
    // handleFileUpload();
  }
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
            value={product.name}
            onChange={(value) => handleChange(value, "name")}
            inputClassName="col-span-3"
            className="grid grid-cols-4 items-center gap-4"
          />
          <InputUI
            id="productImage"
            label="Hình ảnh"
            placeholder="Chọn hình ảnh sản phẩm"
            type="file"
            // value={product.images}
            // onChange={(value) => handleChange(value, "images")}
            inputClassName="col-span-3"
            className="grid grid-cols-4 items-center gap-4"
          />
          <SelectUI
            label="Danh mục"
            options={categoryOptions}
            value={product.category}
            onChange={(value) => handleChange(value, "category")}
            className="grid grid-cols-4 items-center gap-4"
            selectClassName="col-span-3"
          />
          <InputUI
            label="Giá"
            id="productPrice"
            type="number"
            placeholder="Nhập giá sản phẩm"
            value={product.price}
            onChange={(value) => handleChange(value, "price")}
            inputClassName="col-span-3"
            className="grid grid-cols-4 items-center gap-4"
          />
          <InputUI
            label="Mô Tả"
            id="productDescription"
            placeholder="Nhập mô tả sản phẩm"
            value={product.description}
            onChange={(value) => handleChange(value, "description")}
            inputClassName="col-span-3"
            className="grid grid-cols-4 items-center gap-4"
          />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={submit}>Lưu Sản Phẩm</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
