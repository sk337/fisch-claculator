import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { seasons, SeasonType } from "$/season";
import { SelectProps } from "./selectProps";

export const SelectSeason = React.forwardRef<
  HTMLDivElement,
  SelectProps<SeasonType>
>(({ value, optional, onChange, ...props }) => {
  return (
    <Select onValueChange={onChange} value={value} {...props}>
      <SelectTrigger>
        <SelectValue placeholder="Select A Season" />
      </SelectTrigger>
      <SelectContent>
        {seasons.map((season) => (
          <SelectItem value={season.identifier} key={season.identifier}>
            {season.name}
          </SelectItem>
        ))}
        {optional && (
          <SelectItem value={""} key="optional">
            None
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  );
});
