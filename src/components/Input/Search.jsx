
export default function Search({ onSearch }) {

    return (
        <div className="w-full flex">
            <input 
            type="text"
            placeholder="Search Pokemon (Change Display for More Pokemon)" 
            onChange={(e) => onSearch(e.target.value)}
            className="w-[65%] h-15 bg-white rounded-xl border-none outline-none p-4 shadow-md mt-4"
            />
        </div>
    )
}