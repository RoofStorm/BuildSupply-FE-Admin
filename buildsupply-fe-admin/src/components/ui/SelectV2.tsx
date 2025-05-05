import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/lib/select";
import { Label } from "@/components/lib/label";
import { Button } from "../lib/button";

interface SelectUIOptions {
  value: string;
  label: string;
}

interface SelectUIProps {
  placeholder?: string;
  options?: SelectUIOptions[];
  label?: string;
  id?: string;
  disabled?: boolean;
  width?: string;
  className?: string;
  selectClassName?: string;
  value?: string | undefined;
  onChange?: (value: string) => void;
  required?: boolean;
  defaultValue?: string | undefined;
}

export default function SelectUIv2({
  placeholder = "",
  options = [],
  label = "",
  id = "",
  disabled = false,
  width = "w-full",
  className = "gap-1.5 grid",
  selectClassName = "",
  value,
  onChange,
  required = false,
  defaultValue,
}: SelectUIProps) {

  if (!placeholder) placeholder = `Chọn ${label.toLocaleLowerCase()}`;

  const handleChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent opening the select
    handleChange("");
  };

  return (
    <div className={`${className}`}>
      <Label htmlFor={id} className="text-right text-nowrap">
        {label}
      </Label>
      <div className={`${selectClassName} flex w-full gap-1 `}>
        <Select disabled={disabled} value={value} onValueChange={handleChange} required={required} defaultValue={defaultValue} >
          <SelectTrigger className={`${width}`}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{label}</SelectLabel>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value} className="cursor-pointer hover:bg-gray-100 ">
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
            {/* <SelectSeparator /> */}
          </SelectContent>
          <Button
            className="w-auto h-auto px-2 hover:bg-gray-500"
            variant="secondary"
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              handleClear(e)
            }}
          >
            Clear
          </Button>
        </Select>
      </div>
    </div>
  );
}
