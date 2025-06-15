import { useEffect, useState } from "react"
import { FaElementor } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";    

export default function Dropdown({ onTypeSelect }) {
    const [open, setOpen] = useState(false)
    const [type, setType] = useState([])
    const [region, setRegion] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type')
        .then(res => res.json())
        .then(data => setType(data.results))
    }, [])


    return (
        <div className="flex gap-4">
            <div className="relative bg-white w-auto h-10 p-2 text-left flex rounded-md shadow-md cursor-pointer transform transition duration-200">
                <button className="text-gray-500 text-md flex items-center gap-2 cursor-pointer" onClick={() => setOpen(!open)}><FaElementor /> Type <IoIosArrowDown /></button>

                {open && (
                    <div className="absolute top-full z-10 mt-2 w-150 bg-white rounded-2xl shadow-lg">
                        <ul className="py-1 text-gray-400 grid grid-cols-5">
                            {type.map((p) => (
                                <li 
                                    className="w-30 h-10 flex items-center justify-center hover:bg-gray-100" 
                                    key={p.name} 
                                    onClick={() => {
                                        onTypeSelect(p.name)
                                        setOpen(!open)
                                    }}
                                    >
                                    {p.name.toUpperCase()}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <button className="h-10 w-auto rounded-md shadow-md p-2 bg-white text-gray-500 cursor-pointer hover:bg-gray-100" onClick={() => {
                onTypeSelect('')
            }}>
                Reset
            </button>
        </div>
    )
}