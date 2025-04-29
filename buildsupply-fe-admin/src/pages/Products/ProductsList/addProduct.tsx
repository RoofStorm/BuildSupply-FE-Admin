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
import ImageDropzone from "@/components/ui/ImageDropzone";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { useTranslation } from "react-i18next";

export default function AddProduct() {
  const { t } = useTranslation();

  const [product, setProduct] = useState<Product>({
    name: "",
    images: [],
    category: "",
    price: 0,
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

  const [files, setFiles] = useState<File[]>([]);
  const [serverImages] = useState<string[]>([
    
  ]);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <PlusIcon />
          <span className="hidden lg:inline">{t('productPage.addPage.addProduct')}</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[600px]">
        <SheetHeader>
          <SheetTitle>{t('productPage.addPage.addProduct')}</SheetTitle>
          <SheetDescription>
            {t('productPage.addPage.action')}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 p-4">
          <InputUI
            id="productName"
            label={t('productPage.table.name')}
            value={product.name}
            onChange={(value) => handleChange(value, "name")}
            inputClassName="col-span-3"
            className="grid grid-cols-4 items-center gap-4"
          />
          <SelectUI
            label={t('category')}
            options={categoryOptions}
            value={product.category}
            onChange={(value) => handleChange(value, "category")}
            className="grid grid-cols-4 items-center gap-4"
            selectClassName="col-span-3"
            // width="w-auto"
          />
          <CurrencyInput label={t('price')} id="productPrice" placeholder="Nhập giá sản phẩm"
            value={product.price}
            onChange={(value) => handleChange(value, "price")}
            inputClassName="col-span-3"
            className="grid grid-cols-4 items-center gap-4" />
          <InputUI
            label={t('productPage.productDescription')}
            id="productDescription"
            value={product.description}
            onChange={(value) => handleChange(value, "description")}
            inputClassName="col-span-3"
            className="grid grid-cols-4 items-center gap-4"
          />
          <ImageDropzone
            multiple
            initialFiles={product.images}
            onChange={(selectedFiles) => {
              handleChange(selectedFiles, "images")
              setFiles(selectedFiles); // These are File[] you can send to server
            }}
            label={t('image')}
          />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={submit}>{t('productPage.saveProduct')}</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
