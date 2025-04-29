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
import { useTranslation } from "react-i18next";

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
  onChange?: (value: string) => void;
  defaultValue?: string | undefined;
}

export default function SelectUI({
  placeholder = "",
  options = [],
  label = "",
  id = "",
  disabled = false,
  width = "w-[280px]",
  className = "gap-1.5 grid",
  selectClassName = "",
  value,
  onChange,
  defaultValue,
}: SelectUIProps) {
  const { t } = useTranslation();
  if (!placeholder) placeholder = `${t('select')} ${label.toLocaleLowerCase()}`;

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
      {label && 
      <Label htmlFor={id} className="text-right text-nowrap">
        {label}
      </Label>
      }
      <Select disabled={disabled} defaultValue={defaultValue} value={value} onValueChange={handleChange}>
        <SelectTrigger className={`${width} ${selectClassName}`}>
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
          <SelectSeparator />
          <Button
            className="w-full px-2 hover:bg-gray-500"
            variant="secondary"
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              handleClear(e)
            }}
          >
            Clear
          </Button>
        </SelectContent>
      </Select>
    </div>
  );
}
