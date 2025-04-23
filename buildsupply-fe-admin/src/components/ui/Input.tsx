import { Input } from "@/components/lib/input";
import { Label } from "@/components/lib/label";

export function InputUI({
  label = "",
  id,
  type,
  placeholder = "",
  disabled,
  inputClassName = "",
  className = "grid w-full items-center gap-1.5",
}: {
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  inputClassName?: string;
  className?: string;
}) {
  return (
    <div className={className}>
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
