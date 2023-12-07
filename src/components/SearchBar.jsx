import React from "react";
import { LuSearch } from "react-icons/lu";

const { useState } = React;

const SearchBar = (props) => {
    
    const { onSearch }= props;
    const [search, setSearch] = useState("");
    
    
    const onChange = (e) => {
        setSearch(e.target.value);
    };

    const onClick = async (e) => {
        onSearch(search);
    };

    

    return(
        
        <div className="searchBar-container">
            <div className="searchBar-search">
                <input 
                className="bar-search"
                placeholder="Buscar Pokes..."
                onChange={onChange}/>
            </div>
            <div>
                <button className="btn btn1" onClick={onClick}><LuSearch /></button>
            </div>
            
        </div>
    );
}

export default SearchBar