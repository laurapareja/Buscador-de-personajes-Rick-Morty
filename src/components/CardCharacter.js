import React from 'react';


const CardCharacter = props => {
    const { data } = props;
    console.log(data)
    const character = data.map(rol => {
        return (
            <div className="card" key={rol.id}>
                <img alt="" src={rol.image}></img>
                <h2>{rol.name}</h2>
                <h3>{rol.species}</h3>
            </div>
        )
    })
    return (
        <div>{character}</div>
    )
};

export default CardCharacter;