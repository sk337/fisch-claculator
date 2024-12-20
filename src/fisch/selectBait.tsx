import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { baits, BaitType } from "$/baits";
import { SelectProps } from './selectProps';


export const SelectBait = React.forwardRef<HTMLDivElement, SelectProps<BaitType>>(({
    value, 
    onChange, 
    ...props
}) => {

    return (
        <Select onValueChange={onChange} value={value} {...props}>
            <SelectTrigger>
                <SelectValue placeholder="Select A Bait" />
            </SelectTrigger>
            <SelectContent>
                {baits.map((bait) => (
                    <SelectItem value={bait.identifier} key={bait.identifier}>
                        {bait.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
});
