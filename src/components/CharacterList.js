import React from 'react';
import CharacterCard from './CharacterCard'
import '../stylesheets/CharacterList.scss'
import PropTypes from 'prop-types';


const renderList = data => {
    return data.map((character, index) => {
        return <CharacterCard rol={character} key={index} />;
    });
};

const CharacterList = props => {
    const data = props.data;
    return <ul className="listCharacters">{renderList(data)}</ul>
};


CharacterList.protoTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CharacterList;