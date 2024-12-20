import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { seasons, SeasonType } from "$/season";
import { SelectProps } from './selectProps';

export const SelectSeason = React.forwardRef<HTMLDivElement, SelectProps<SeasonType>>(({
    value, 
    onChange, 
    ...props
}) => {

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
            </SelectContent>
        </Select>
    );
});
