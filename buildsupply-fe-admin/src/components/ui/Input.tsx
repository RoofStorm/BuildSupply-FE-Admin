import { Input } from "@/components/lib/input";
import { Label } from "@/components/lib/label";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function InputUI({
  label = "",
  id,
  type,
  placeholder = "",
  disabled,
  inputClassName = "",
  className = "grid w-full items-center gap-1.5",
  value,
  onChange,
}: {
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  inputClassName?: string;
  className?: string;
  value?: any; // Updated to match the expected type for non-file inputs
  onChange?: (value: string | number | undefined) => void;
}) {
  const { t } = useTranslation();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.value); // Handle other input types
      }
  };

  if(!placeholder) { placeholder = `${t('enter')} ${label.toLocaleLowerCase()}`}

  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClassName}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}