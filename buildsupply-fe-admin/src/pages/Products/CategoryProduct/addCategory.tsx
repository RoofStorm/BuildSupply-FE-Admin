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
import { useTranslation } from "react-i18next";

export default function AddCategory() {
  const { t } = useTranslation();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <PlusIcon />
          <span className="hidden lg:inline">{t('categoryPage.addPage.addCategory')}</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[600px]">
        <SheetHeader>
          <SheetTitle>{t('categoryPage.addPage.addCategory')}</SheetTitle>
          <SheetDescription>
            {t('categoryPage.addPage.action')}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 p-4">
          <InputUI
            id="categoryName"
            label={t('categoryPage.name')}
            inputClassName="col-span-3"
            className="grid grid-cols-4 items-center gap-4"
          />
          <SelectUI
            label={t('categoryPage.parentCategory')}
            options={categoryOptions}
            className="grid grid-cols-4 items-center gap-4"
          />
          <InputUI
            id="categoryImage"
            label={t('image')}
            type="file"
            inputClassName="col-span-3"
            className="grid grid-cols-4 items-center gap-4"
          />
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="productDescription" className="text-right">
              {t('description')}
            </Label>
            <Textarea
              id="productDescription"
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">{t('categoryPage.saveCategory')}</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
