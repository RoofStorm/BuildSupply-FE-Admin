import AddProduct from "./AddProduct";
import { ProductTable } from "./ProductTable";
import data from "./data.json";
import { InputUI } from "@/components/ui/Input";
import SelectUI from "@/components/ui/Select";
import { categoryOptions, statusOptions } from "@/constants/product.constant";

function Products() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <AddProduct />
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
        {/* Search Input */}
        <InputUI
          label="Tìm kiếm sản phẩm"
          id="searchProduct"
          placeholder="Tìm kiếm sản phẩm..."
          className="grid w-full md:w-1/2 items-center gap-1.5 "
        />
        {/* Filter Zone */}
        {/* Filter by Category */}
        <SelectUI
          placeholder="Chọn danh mục"
          selectLabel="Danh mục"
          label="Danh mục"
          options={categoryOptions}
          className="gap-1.5 grid"
        />
        {/* Filter by Status */}
        <SelectUI
          placeholder="Chọn Trạng thái"
          selectLabel="Trạng thái"
          label="Trạng thái"
          options={statusOptions}
          className="gap-1.5 grid"
        />
      </div>
      {/* Product Table Section */}
      <div>
        <ProductTable data={data} />
      </div>
    </div>
  );
}

export default Products;
