import { useEffect, useState } from "react";

const DebounceSearch = ({ value: initValue, 
    debounce = 500, 
    onChange, 
    ...props }) => {
        
    const [value, setValue] = useState(initValue);

    useEffect(() => {
        setValue(initValue)
    }, [initValue]);

    // 0.5s after setValue in state.
    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value)
        }, debounce)

        return () => clearTimeout(timeout)

    }, [value]);

    return (
        <>
            <input {...props} value={value} onChange={(e)=>setValue(e.target.value)}/>
        </>
    )
}

export default DebounceSearch;