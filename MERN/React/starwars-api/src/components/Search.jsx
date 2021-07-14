import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = props => {
    const { id, category } = props;
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(res => {
                setData(res.data)
                setLoaded(true)
            })
    }, [props]);
    
    
    return (
        loaded ? props.category === 'people' ?
            <div>
                
                <h1>{data.name}</h1>
                <ul>
                    <li>Gender: {data.gender}</li>
                    <li>Mass: {data.mass}</li>
                    <li>Height: {data.height}</li>
                    <li>Birth Year: {data.birth_year}</li>
                    <li>Hair: {data.hair_color}</li>
                </ul>
                
            </div>
            :
            props.category === "planets" ?
                <div>
                    
                    <h1>{data.name}</h1>
                    <ul>
                        <li>Climate: {data.climate}</li>
                        <li>Gravity: {data.gravity}</li>
                        <li>Terrain: {data.terrain}</li>
                        {data.surface_water === "1" ? <li>Surface Water: True</li> : <li>Surface Water: False</li>}
                        <li>Population: {data.population}</li>
                        <li>Orbital Period: {data.orbital_period}</li>
                    </ul>
                    
                </div>
                : null:"...loading"
    )
}

export default Search;