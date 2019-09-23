import React from 'react';


const CharacterCard = props => {
    const { data, query } = props;
    const character = data

        .filter(rol => rol.name.toUpperCase().includes(query.toUpperCase()))
        .map(rol => {
            return (
                <div className="card" key={rol.id}>
                    <img alt="" src={rol.image}></img>
                    <h2>{rol.name}</h2>
                    <h3>{rol.species}</h3>
                </div>
            )
        })
    return (
        <div className="listCharacters">{character}</div>
    )
};

export default CharacterCard;