/**
 * Generic interface for select components
 */
export interface SelectProps<T> {
    /**
     * Current value of the select.
     */
    value?: T;
    /**
     * Callback for when the value changes.
     * @param value New value of the select.
     */
    onChange: (value: T) => void;
}