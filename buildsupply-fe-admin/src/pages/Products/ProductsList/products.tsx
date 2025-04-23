import { Input } from "@/components/lib/input";
import { Label } from "@/components/lib/label";
import AddProduct from "./addProduct";
import { ProductTable } from "./ProductTable";
import data from "./data.json";
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
        <div className="grid w-full md:w-1/2 items-center gap-1.5 ">
          <Label htmlFor="email">Tìm kiếm sản phẩm</Label>
          <Input type="email" id="email" placeholder="Tìm kiếm sản phẩm..." />
        </div>
        {/* Filter Zone */}
        {/* Filter by Category */}
        <SelectUI label="Danh mục" options={categoryOptions}/>
        {/* Filter by Status */}
        <SelectUI label="Trạng thái" options={statusOptions}/>

      </div>
      {/* Product Table Section */}
      <div>
        <ProductTable data={data} />
      </div>
    </div>
  );
}

export default Products;
