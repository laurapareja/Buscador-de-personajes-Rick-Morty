import React from 'react';
import CharacterCard from './CharacterCard'
import '../stylesheets/CharacterList.scss'
import PropTypes from 'prop-types';


const renderList = (data, favorites) => {
    console.log(data)
    return data.map((character, index, status) => {
        return <CharacterCard rol={character} key={index} favorites={favorites} status={status} />;
    });
};

const CharacterList = props => {
    const { data, favorites } = props;
    return <ul className="listCharacters">{renderList(data, favorites)}</ul>
};


CharacterList.protoTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CharacterList;