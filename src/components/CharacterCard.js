import React from 'react';
import { Link } from 'react-router-dom';


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
                    <Link
                        to={`/character-detail/${rol.id}`} className="characterDetailLink">
                        Ver detalle
                    </Link>
                </div>
            )
        })
    return (
        <div className="listCharacters">{character}</div>
    )
};

export default CharacterCard;