import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { mutations, MutationType } from "$/mutations";
import { SelectProps } from '$/selectProps';


/**
 * A select component for selecting a mutation.
 */
export const SelectMutation = React.forwardRef<HTMLDivElement, SelectProps<MutationType>>(({
    value, 
    onChange, 
    ...props
}) => {

    return (
        <Select onValueChange={onChange} value={value} {...props}>
            <SelectTrigger>
                <SelectValue placeholder="Select A Mutation" />
            </SelectTrigger>
            <SelectContent>
                {mutations.map((mutation) => (
                    <SelectItem value={mutation.identifier} key={mutation.identifier}>
                        {mutation.name} ({mutation.value}x)
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
});
