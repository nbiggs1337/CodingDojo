import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = props => {
    const [pokemon, setPokemon] = useState([]);
    
    
    const ClickHandler = e => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1118')
            .then(res =>{setPokemon(res.data.results)})
    }
    
    return (
        <div>
            <button onClick={ e => ClickHandler() }>Axios Fetch Pokemon!</button>
            
            {
                pokemon.map( (p, i ) => {
                    return(
                        <div key={i}>{p.name}</div>
                )})
            }
        </div>
        
    );
    
}

export default Pokemon;