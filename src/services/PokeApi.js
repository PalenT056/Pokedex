export async function FetchPokemon (offset = 1, limit = 30) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset - 1}`)
    const data = await res.json()
    return data.results
}

export async function FetchPokemonDetail(url) {
    const res = await fetch(url)
    const data = await res.json()
    return {
        name: data.name,
        image: data.sprites.front_default,
        id: data.id,
        types: data.types,
        stats: data.stats,
        abilities: data.abilities,
        species: data.species
    }
}