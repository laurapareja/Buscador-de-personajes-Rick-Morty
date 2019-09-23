import React from 'react';
import CharacterCard from './CharacterCard'
import '../stylesheets/CharacterList.scss'
import PropTypes from 'prop-types';


const CharacterList = props => {
    const { data, query } = props;
    //revisar logica, ul & li
    return (
        <ul>
            <CharacterCard query={query} data={data} />
        </ul>
    )
}

CharacterList.protoTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    query: PropTypes.string.isRequired
};

export default CharacterList;