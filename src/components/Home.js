import React from 'react'
import CharacterList from './CharacterList';
import Filter from './Filter';

const Home = props => {
    const { action, query, data } = props;
    return (
        <main>
            <Filter action={action} value={query} />
            <div>
                <CharacterList query={query} data={data} />
            </div>
        </main>
    )
}

export default Home;

