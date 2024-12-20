import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { rods, RodType } from "$/rods";
import { SelectProps } from './selectProps';

export const SelectRod = React.forwardRef<HTMLDivElement, SelectProps<RodType>>(({
    value, 
    onChange, 
    ...props
}) => {

    return (
        <Select onValueChange={onChange} value={value} {...props}>
            <SelectTrigger>
                <SelectValue placeholder="Select A Rod" />
            </SelectTrigger>
            <SelectContent>
                {rods.map((rod) => (
                    <SelectItem value={rod.identifier} key={rod.identifier}>
                        {rod.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
});