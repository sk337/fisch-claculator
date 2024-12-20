import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { rods, RodType } from "$/rods";

interface SelectRodProps {
    value?: RodType;
    onChange: (value: RodType) => void;
}

export const SelectRod = React.forwardRef<HTMLDivElement, SelectRodProps>(({
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