import './App.css';
import Navbar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Pokedex from './components/Pokedex';
import React from 'react';
import { getPokemons, searchPokemon } from './api';
import { getPokemonsData } from './api';


const {useState, useEffect} = React;

function App() {

  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFund, setNotFound] =useState(false)



  const fetchPokemons = async () => {
    try{
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      console.log(data.results);
      const promise = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url)
      })
      const results = await Promise.all(promise)
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25))
    } catch(error){
    }
  }

  const onSearch = async (pokemon) => {
    setLoading(true);
    const result = await searchPokemon(pokemon);
    if(!result){
      setNotFound(true);
      setLoading(false);
      return;
    } else {
    setPokemons([result]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchPokemons();
  }, [page])


  
  return( 
    <div>
        <Navbar/>
        <div className='App'>
        <SearchBar onSearch={onSearch}/>
          {notFund ?
            <div className='error-msg'>No se encontro lo que buscabas</div>
            :
          
        <Pokedex 
          loading={loading}
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
        />}
        </div>
    </div>
    

      
  
  );
}

export default App;
