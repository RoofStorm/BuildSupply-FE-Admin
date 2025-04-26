import AddProduct from "./AddProduct";
import { ProductTable } from "./ProductTable";
import data from "./data.json";
import SelectUI from "@/components/ui/Select";
import { categoryOptions, statusOptions } from "@/constants/product.constant";
import { useState } from "react";
import { Product } from "@/types/product";
import { InputUI } from "@/components/ui/Input";
import { Button } from "@/components/lib/button";
import { useTranslation } from 'react-i18next';

function Products() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState({
    category:'',
    status:''
  })

  const handleChange = (value: any, field: keyof Product) => {
    setFilter({ ...filter, [field]: value });
    };
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{t('product')}</h1>
        <AddProduct />
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-2">
        {/* Search Input */}
        <InputUI label={t('productPage.searchProduct')} id="productSearch" placeholder={t('productPage.searchProduct')} className="grid w-full md:w-1/2 items-center gap-1.5" />
        {/* Filter by Category */}
        <SelectUI label={t('category')} options={categoryOptions} value={filter.category} onChange={(value) => handleChange(value, "category")}/>
        {/* Filter by Status */}
        <SelectUI label={t('status')} options={statusOptions} value={filter.status} onChange={(value) => handleChange(value, "status")} />
      </div>
      <div className="flex justify-center mb-6">
        <Button className="hover:bg-gray-600">{t('search')}</Button>
      </div>
      {/* Product Table Section */}
      <div>
        <ProductTable data={data} />
      </div>
    </div>
  );
}

export default Products;
