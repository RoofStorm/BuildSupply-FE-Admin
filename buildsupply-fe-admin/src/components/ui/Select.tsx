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
  description?: string;
  options?: SelectUIOptions[];
  label?: string;
  id?: string;
  disabled?: boolean;
  width?: string;
}

export default function SelectUI({
  placeholder = "",
  description = "",
  options = [],
  label = "",
  id="",
  disabled = false,
  width = "w-[280px]",
}: SelectUIProps) {
  return (
    <>
      <Label htmlFor={id} className="text-right text-nowrap">
        {label}
      </Label>
      <Select disabled={disabled}>
        <SelectTrigger className={width}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{description}</SelectLabel>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
