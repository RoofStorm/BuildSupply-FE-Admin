import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/lib/select";
import { Label } from "@/components/lib/label";

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
  value?:string | undefined;
  onChange?: (value: string) => void
}

export default function SelectUI({
  placeholder = "",
  options = [],
  label = "",
  id = "",
  disabled = false,
  width = "w-auto",
  className = "gap-1.5 grid",
  selectClassName = "",
  value,
  onChange,
}: SelectUIProps) {

  if(!placeholder) placeholder= `Chọn ${label.toLocaleLowerCase()}`;

  const handleChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={`${className}`}>
      <Label htmlFor={id} className="text-right text-nowrap">
        {label}
      </Label>
      <Select disabled={disabled} value={value} onValueChange={handleChange}>
        <SelectTrigger className={`${width} ${selectClassName}`}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
