import Navbar from "../components/Navbar/Nav"

export default function Home () {
    return (
        <div className="flex flex-col max-w-[1200px] h-[100vh] mx-auto">
            <Navbar/>
            <div className="h-screen flex flex-col justify-center items-center">
                <p className="text-gray-500">Content Available Only in <a href="/pokedex" className="underline">POKEDEX</a> for Now</p>
            </div>
        </div>
    )
}