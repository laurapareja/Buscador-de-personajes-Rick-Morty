import React from 'react';
import { Link } from 'react-router-dom';

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

    return (
        <React.Fragment>
            <div>
                <img alt={character} src={character.image} />
                <h2>{character.name}</h2>
                <h3>Species: {character.status}</h3>
                <h3>Origin: {character.origin.name}</h3>
                <h3>Episodes: {character.episode.length}</h3>



                <Link to="/" className="app__back">Volver al listado</Link>
            </div>
        </React.Fragment>

    )
}

export default CharacterDetail;