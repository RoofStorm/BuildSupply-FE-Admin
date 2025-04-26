import { InputUI } from "./Input";


const SearchBox = () => {
  return <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
    {/* Search Input */}
    <div className="grid w-full md:w-1/2 items-center gap-1.5 ">
      <InputUI type="text" id="email" placeholder="Tìm kiếm sản phẩm..." className="grid w-full md:w-1/2 items-center gap-1.5" />
    </div>
  </div>
}

export default SearchBox;