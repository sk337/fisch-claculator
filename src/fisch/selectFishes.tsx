import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fishes, fishType } from "$/fishes";
import { SelectProps } from "$/selectProps";

/**
 * A select component for selecting a Fish.
 */
export const SelectFish = React.forwardRef<
  HTMLDivElement,
  SelectProps<fishType>
>(({ value, onChange, ...props }) => {
  return (
    <Select onValueChange={onChange} value={value} {...props}>
      <SelectTrigger>
        <SelectValue placeholder="Select A Fish" />
      </SelectTrigger>
      <SelectContent>
        {fishes.map((fish) => (
          <SelectItem value={fish.identifier} key={fish.identifier}>
            {fish.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
});
