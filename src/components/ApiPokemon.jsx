import React, { useEffect, useState } from 'react'

export const ApiPokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const apiInfo = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }
    useEffect(() => {
        
    }, []);
    console.log(pokemon);
    return (
        <div>
            <button onClick={apiInfo}>Cargar Api</button>
            <ul>
            { pokemon?.map( ( pokemon , i) => {
                return <li key={i}>{pokemon.name}</li>
            })
            }
            </ul>
            
        </div>
    )
}
