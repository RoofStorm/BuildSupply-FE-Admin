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
  selectLabel?: string;
  options?: SelectUIOptions[];
  label?: string;
  id?: string;
  disabled?: boolean;
  width?: string;
  className?: string;
}

export default function SelectUI({
  placeholder = "",
  selectLabel = "",
  options = [],
  label = "",
  id = "",
  disabled = false,
  width = "w-[280px]",
  className = "",
}: SelectUIProps) {
  return (
    <div className={`gap-1.5 grid ${className}`}>
      <Label htmlFor={id} className="text-right text-nowrap">
        {label}
      </Label>
      <Select disabled={disabled}>
        <SelectTrigger className={width}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{selectLabel}</SelectLabel>
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
