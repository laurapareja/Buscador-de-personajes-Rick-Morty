import React from 'react';
import CharacterCard from './CharacterCard'


const CharacterList = props => {
    const { data, query } = props;
    return (
        <ul>
            <CharacterCard query={query} data={data} />
        </ul>
    )
}

export default CharacterList;