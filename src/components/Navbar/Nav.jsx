import { Link } from 'react-router-dom'
import { TbHome, TbPokeball, TbInfoCircle } from 'react-icons/tb'

function Navbar () {
    return (
        
      <div className="h-[80px] w-[100%] flex justify-center items-center bg-white rounded-2xl shadow-md sticky top-0 z-50">
            <ul className="flex gap-8 h-[100%]">
              <Link to="/">
                <li className="text-xl w-auto h-[100%] items-center font-bold text-gray-700 cursor-pointer flex gap-2 hover:border-b-2"><TbHome className='text-3xl'/>Home</li>
              </Link>
              <Link to="/pokedex">
                <li className="text-xl w-auto h-[100%] items-center font-bold text-gray-700 cursor-pointer flex gap-2 hover:border-b-2"><TbPokeball className='text-3xl'/>Pokedex</li>
              </Link>
            </ul>
        </div>
    )
}

export default Navbar