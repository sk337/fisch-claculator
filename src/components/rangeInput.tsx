import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

//@ts-expect-error i know this happends because of the import
interface RangeInputSelect extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: number;
  min: number;
  step?: number;
  max: number;
  onChange: (value: number) => void;
}

export default function RangeInputSelect({
  label,
  value,
  min,
  step,
  max,
  onChange,
  ...props
}: RangeInputSelect) {
  return (
    <div className="flex flex-row gap-2 items-center" {...props}>
      <Label>{label}</Label>
      <Input
        type="range"
        value={value}
        min={min}
        step={step}
        max={max}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
      <Input
        type="number"
        max={max}
        min={min}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </div>
  );
}
