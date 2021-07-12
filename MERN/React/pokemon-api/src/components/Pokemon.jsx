import React, { useState, useEffect } from 'react';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    const [display, setDisplay] = useState(false);
    
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(res => {return(res.json())})
            .then(res => setPokemon(res.results))
    },[]);
    
    
    const ClickHandler = e => {
        !display ? setDisplay(true) : setDisplay(false);
        
    }
    
    return (
        <div>
            <br />
            <button onClick={ e => ClickHandler() } >Fetch Pokemon</button>
            
            {display ? pokemon.map((pokemon, i) => {
                return (<div key={i}>{pokemon.name}</div>)
            }) : <span></span> }
            
        </div>
    );
}
export default Pokemon;

