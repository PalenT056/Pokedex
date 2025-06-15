export default function Card ({ pokemon, onCardClick }) {

    return (
    <div className="grid grid-cols-3 gap-4 w-[65%] h-auto p-4">
      {pokemon.map((p, i) => (
        <div key={i} onClick={() => onCardClick(p)} className="relative mt-15 h-40 bg-white rounded-3xl transform transition duration-300 shadow-md flex flex-col items-center cursor-pointer hover:-translate-y-[4px] hover:shadow-lg">
          <img src={p.image} className="w-40 h-40 absolute -top-20"/>
          <p className="text-sm text-gray-400 mt-20">#{p.id}</p>
          <p className="text-2xl font-bold">{p.name}</p>
        </div>
      ))}
    </div>
    )
}