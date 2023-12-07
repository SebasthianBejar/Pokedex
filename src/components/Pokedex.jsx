import React from "react";
import Pokemon from "./pokemon"
import Pagination from "./Pagination";

const Pokedex = (props) => {
    const { pokemons, page, setPage, total, loading} = props;
    

    const lastPages = () =>{
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage)
    }

    const nextPage = () =>{
        const nextPage = Math.min(page + 1, total);
        setPage(nextPage)
    };

    return(
        <div>
            <div className="header">
                <Pagination className="pagination-a"
                    page={page + 1} 
                    totalPages={total}
                    onLeftClick = {(lastPages)}
                    onRigthClick = {(nextPage)}
                />

            </div>

            {loading ? 
            <div class="text-center">
                <div className='spinner-border' role="status">
                    <span className="visually-hidden">Pokemons....</span>
                </div>
            </div>  
                :
            <div className="pokedex-grid">
                {pokemons.map((pokemon, idx) => {
                    return(
                        <Pokemon pokemon={pokemon} key={pokemon.name}/>
                    )
                })}
            </div>
            }
        </div>

    )
}

export default Pokedex;