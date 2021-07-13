import React from 'react';


const Search = props => {
    const {data, category} = props;
    if (props.category === 'people'){
            return(
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
        );
    } 
    else if (props.category === "planets") {
        return(
            <div>
                <h1>{data.name}</h1>
                <ul>
                    <li>Climate: {data.climate}</li>
                    <li>Gravity: {data.gravity}</li>
                    <li>Terrain: {data.terrain}</li>
                    {data.surface_water === "1" ? <li>Surface Water: True</li> : <li>Surface Water: False</li> }
                    <li>Population: {data.population}</li>
                    <li>Orbital Period: {data.orbital_period}</li>
                </ul>
            </div>
        );
    } else {
        return("");
    }
    
}

export default Search;