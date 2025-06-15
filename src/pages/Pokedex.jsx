import { useEffect, useState } from "react";
import { FetchPokemon, FetchPokemonDetail } from "../services/PokeApi";
import Navbar from "../components/Navbar/Nav";
import Card from "../components/Pokemon/Card";
import PokemonData from "../components/Pokemon/PokemonInfo";
import Search from "../components/Input/Search";
import Input from "../components/Input/Input";
import Dropdown from "../components/Input/Dropdown";
import '../index.css'

function Pokedex() {
  const [pokemon, setPokemon] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [selectedType, setSelectedType] = useState('')
  const [search, setSearch] = useState([])
  const [limit, setLimit] = useState(30)
  const [offset, setOffset] = useState(1)

  useEffect(() => {
    async function load() {
      const result = await FetchPokemon(offset, limit)
      const detailed = await Promise.all(
        result.map(p => FetchPokemonDetail(p.url))
      )
      setPokemon(detailed)
      setSearch(detailed)
    }
    load()
  }, [offset, limit])

  const searchPokemon = (query = '', type = selectedType) => {
    let filtered = pokemon

    if (query) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase())
      )
    }

    if (type) {
      filtered = filtered.filter(p =>
        p.types.some(t => t.type.name === type)
      )
    }

    setSearch(filtered)
  }

  const handleTypeChange = (type) => {
    setSelectedType(type)
    searchPokemon('', type)
  }

  return (
    <div className="flex flex-col max-w-[1200px] mx-auto">

        <Navbar/>

        <div className="flex flex-col w-full">
          <Search onSearch={searchPokemon}/>
        </div>

        <div className="flex w-[65%] h-20 items-center justify-between">
          <Dropdown onTypeSelect={handleTypeChange}/>
          <Input onOffset={va => setOffset(va)} onIndex={val => setLimit(val)}/>
        </div>
          
      <div className="w-full pt-4 flex">
        <Card pokemon={search} onCardClick={setSelectedPokemon}/>
        <PokemonData data={selectedPokemon}/>
      </div>

      <footer className="w-[70%] h-15 flex justify-center items-center"></footer>

    </div>
  );
}

export default Pokedex;