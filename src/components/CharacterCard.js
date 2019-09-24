import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterCard.scss'
import PropTypes from 'prop-types';

const CharacterCard = props => {
    const { rol } = props;
    console.log(rol)
    return (
        <li className='card' key={rol.id}>
            <img alt="" src={rol.image}></img>
            <div className="cardInfoContent">
                <h2 className="characterName">{rol.name}</h2>
                <div className="footerCard">
                    <h3 className="characterSpecies">{rol.species}</h3>
                    <Link
                        to={`/character-detail/${rol.id}`} className="characterDetailLink">
                        Ver detalle
                              </Link>
                </div>
            </div>
        </li>
    )
};

CharacterCard.propTypes = {
    rol: PropTypes.object.isRequired,
};

export default CharacterCard;