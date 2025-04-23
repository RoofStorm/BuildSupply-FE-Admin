import AddCategory from "./AddCategory";
import { CategoryTable } from "./categoryTable";
import data from "./data.json";
import { InputUI } from "@/components/ui/Input";
import SelectUI from "@/components/ui/Select";
import { statusOptions } from "@/constants/product.constant";

export default function Categories() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Category</h1>
        <AddCategory />
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
        {/* Search Input */}
        <InputUI
          label="Tìm kiếm danh mục"
          placeholder="Tìm kiếm danh mục..."
          className="grid w-full md:w-1/2 items-center gap-1.5 "
        />
        {/* Filter Zone */}
        {/* Filter by Status */}
        <SelectUI
          placeholder="Chọn Trạng thái"
          selectLabel="Trạng thái"
          label="Trạng thái"
          options={statusOptions}
        />
      </div>
      {/* Product Table Section */}
      <div>
        <CategoryTable data={data} />
      </div>
    </div>
  );
}
