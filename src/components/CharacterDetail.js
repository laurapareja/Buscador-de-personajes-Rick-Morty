import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterDetail.scss'
import PropTypes from 'prop-types'


const CharacterDetail = props => {
    const { routerProps, data } = props;
    const characterId = parseInt(routerProps.match.params.characterId);
    console.log(data.length)

    if (characterId > data.length) {
        return (
            <div>
                <p>Estos no son los personajes que estás buscando...</p>
                <img alt="star wars meme" src="http://i.imgur.com/zK1qu9H.jpg"></img>
            </div>

        )
    }

    const character = data.find(character =>
        character.id === characterId);
    console.log(character)


    const specie = character.species.toLowerCase() === 'human' ? <h3 className="characterDetail">Human <i className="fas fa-child" title='Human'></i></h3> : <h3 className="characterDetail">Alien <i className="fab fa-reddit-alien" title='Alien'></i></h3>;

    const status = character.status.toLowerCase() === 'alive' ? <h3 className="characterDetail">Alive <i className="fas fa-heartbeat" title='Alive'></i></h3> : <h3 className="characterDetail">Death <i className="fas fa-skull-crossbones" title='Death'></i></h3>;


    return (
        <React.Fragment>

            <div className="cardDetail"> <Link to="/" className="homeLink">Volver al listado</Link>

                <div>
                    <img alt={character} src={character.image} className="imgCardDetail" />
                </div>
                <div className="infoCardDetailContainter">
                    <h2 className="characterNameDetail">{character.name}</h2>
                    {specie}
                    <h3 className="characterDetail">Origin: {character.origin.name}</h3>
                    {status}
                    <h3 className="characterDetail">Episodes: {character.episode.length}</h3>
                    <button className="favoriteLink">Favorito</button>
                </div>
            </div>
        </React.Fragment>

    )
}
CharacterDetail.propTypes = {
    routerProps: PropTypes.object.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CharacterDetail;