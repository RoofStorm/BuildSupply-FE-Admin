import { Input } from "@/components/lib/input";
import { Label } from "@/components/lib/label";

export function InputUI({
  label = "",
  id,
  type,
  placeholder = "",
  disabled,
  inputClassName = "",
  
}: {
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  inputClassName?: string;
}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClassName}
      />
    </div>
  );
}
