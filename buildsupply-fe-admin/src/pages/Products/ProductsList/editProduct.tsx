import { Button } from "@/components/lib/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/lib/sheet";
import { InputUI } from "@/components/ui/Input";
import SelectUI from "@/components/ui/Select";
import { categoryOptions } from "@/constants/product.constant";
import { useTranslation } from "react-i18next";

export default function EditProduct({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
    const { t } = useTranslation();
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="sm:max-w-[600px]">
        <SheetHeader>
          <SheetTitle>{t('productPage.editPage.editProduct')}</SheetTitle>
          <SheetDescription>
            {t('productPage.editPage.action')}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 p-4">
          <InputUI
            label={t('productPage.table.name')}
            id="productName"
            inputClassName="col-span-3"
            className="grid grid-cols-4 items-center gap-4"
          />
          <InputUI
            id="productImage"
            label={t('productPage.table.image')}
            type="file"
            inputClassName="col-span-3"
            className="grid grid-cols-4 items-center gap-4"
          />
          <SelectUI
            label={t('category')}
            options={categoryOptions}
            className="grid grid-cols-4 items-center gap-4"
          />
          <InputUI
            label={t('price')}
            id="productPrice"
            type="number"
            inputClassName="col-span-3"
            className="grid grid-cols-4 items-center gap-4"
          />
          <InputUI
            label={t('productPage.productDescription')}
            id="productDescription"
            inputClassName="col-span-3"
            className="grid grid-cols-4 items-center gap-4"
          />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={() => setOpen(false)}>
              {t('productPage.saveProduct')}
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
