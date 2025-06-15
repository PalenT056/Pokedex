export default function PokemonInfo({ data }) {

    return (
        <div className="w-[35%] h-[620px] pl-15 sticky top-[28.5vh] relative">
            {data ? (
                <div className="bg-white w-full h-full rounded-3xl shadow-md flex flex-col items-center">
                    <img className="h-80 w-80 absolute -top-40 transition duration-200" src={data.image}/>
                    <p className="text-gray-400 text-md font-bold mt-35"># {data.id}</p>
                    <p className="text-3xl font-bold">{(data.name).toUpperCase()}</p>
                    <div className="flex gap-2">
                        {data.types.map((t, i) => {
                            return (
                                <div key={i} className="bg-gray-300 w-20 flex align-center justify-center rounded-xl cursor-default hover:translate-y-[-2px] transition duration-200">
                                    <p className="font-bold text-white">{(t.type.name).toUpperCase()}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-full h-auto flex flex-col pt-6 gap-2">
                        {data.stats.map((t, i) => {
                            return (
                                <div key={i} className="flex gap-2 w-full h-auto justify-center items-center">
                                    <p className="w-32 text-gray-1000 font-bold ">{(t.stat.name)}</p>
                                    <div className="bg-gray-200 h-3 w-[50%] rounded-xl hover:translate-y-[-2px] transition duration-200">
                                        <div className="bg-blue-300 flex h-full pl-3 rounded-xl items-center text-sm transition-all duration-300" style={{width: `${(t.base_stat / 200) * 100}%`}}><p>{t.base_stat}</p></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <h1 className="text-xl font-bold mt-4">ABILITY</h1>
                    <div className="flex gap-2 w-full justify-center pr-4 pl-4">
                        {data.abilities.map((t, i) => {
                            return (
                                <div key={i} className="bg-white border-2 border-gray-200 h-8 w-[33%] rounded-3xl flex items-center justify-center hover:translate-y-[-2px] transition duration-200">
                                    <p className="text-xs font-bold">{(t.ability.name).toUpperCase()}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ) : (
                <div className="bg-white w-full h-full rounded-3xl shadow-md flex items-center justify-center">
                    <p className="text-gray-400">No Pokemon Selected</p>
                </div>
            )}
        </div>
    )
}

