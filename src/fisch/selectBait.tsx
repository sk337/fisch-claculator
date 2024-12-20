import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { baits, BaitType } from "$/baits";

interface SelectBaitProps {
    value?: BaitType;
    onChange: (value: BaitType) => void;
}

export const SelectBait = React.forwardRef<HTMLDivElement, SelectBaitProps>(({
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
