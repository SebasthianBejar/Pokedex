import React from "react";

const Pokemon = (props) => {
    const {pokemon} = props;
    const formattedId = String(pokemon.id).padStart(3, '0');

    return(
        <div className="pokemon-card">
            <p className="poke-idBack">#{formattedId}</p>
            <div className="pokemon-img">
                <img 
                    src={pokemon.sprites.other["official-artwork"].front_default}
                    alt={pokemon.name}
                />
            </div>
            <div className="poke-info">
                <div className="poke-desc">
                    <p className="pokemon-id">#{formattedId}</p>
                    <h2 className="nombre-poke">{pokemon.name}</h2>
                </div>
                <div className="poke-tipos">
                    {pokemon.types.map((type, idx) => {
                        return(
                            <p key={idx} className={`tipos ${type.type.name}`} > 
                            {type.type.name} 
                            </p>
                        )
                    })}
                </div>
                <div className="poke-stats">
                    <p className="stats">{pokemon.weight}Kg</p>
                    <p className="stats">{pokemon.height}m</p>
                </div>
            </div>   
        </div>
    )
}



export default Pokemon;