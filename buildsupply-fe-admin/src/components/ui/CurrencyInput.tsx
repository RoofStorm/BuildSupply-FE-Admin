import React, { useState, useEffect } from "react";
import { Input } from "../lib/input";
import { Label } from "../lib/label";

interface CurrencyInputProps {
  value?: number | string;
  onChange?: (value: number) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
  label?: string;
  id?: string;
}

const formatCurrency = (value: number | string): string => {
  const number = typeof value === "string" ? parseFloat(value.replace(/,/g, "")) : value;
  if (isNaN(number)) return "";
  return number.toLocaleString("en-US");
};

const parseCurrency = (value: string): number => {
  return parseFloat(value.replace(/,/g, ""));
};

export const CurrencyInput = ({
  label = "",
  id,
  value = 0,
  onChange,
  placeholder = "Enter amount",
  disabled = false,
  className = "grid w-full items-center gap-1.5",
  inputClassName = "",
}: CurrencyInputProps) => {
  const [displayValue, setDisplayValue] = useState(formatCurrency(value));

  useEffect(() => {
    setDisplayValue(formatCurrency(value));
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const numericValue = parseCurrency(raw);
    if (!isNaN(numericValue)) {
      setDisplayValue(formatCurrency(numericValue));
      onChange?.(numericValue);
    } else {
      setDisplayValue(raw);
      onChange?.(0);
    }
  };

  const handleFocus = () => {
    setDisplayValue(parseCurrency(displayValue).toString() || "");
  };

  const handleBlur = () => {
    setDisplayValue(formatCurrency(displayValue));
  };

  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type="text"
        value={displayValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClassName}
      />
    </div>
  );
};
