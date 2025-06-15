import { useState } from "react";

export default function Input ({ onOffset, onIndex }) {
    const [value, setValue] = useState(30)
    const [offset, setOffset] = useState(1)

    function handlevalue (event) {
        const val = event.target.value

        if (val === "" || (parseInt(val) <= 1025 && !isNaN(parseInt(val)))) {
            setValue(val)
            onIndex(val)
        }
    }

    function handleOffset (event) {
        const val = event.target.value

        if (val === "" || (parseInt(val) <= 1025 && !isNaN(parseInt(val)))) {
            setOffset(val)
            onOffset(val)
        }
    }

    return (
        <div className="flex items-center gap-1 w-auto h-[100%]">
            <p className="text-gray-400">from index</p>
            <div className="h-auto w-auto border-1 rounded-xl">
                <input className="h-10 w-15 p-3 outline-none no-spinner" value={offset} onChange={handleOffset} type="number" min={0}/>
            </div>
            <p className="text-gray-400">display</p>
            <div className="h-auto w-auto border-1 rounded-xl">
                <input className="h-10 w-15 p-3 outline-none no-spinner" value={value} onChange={handlevalue} type="number" min={0} max={1302}/>
            </div>
        </div>
    )
}