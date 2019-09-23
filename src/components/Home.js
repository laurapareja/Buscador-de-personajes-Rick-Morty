import React from 'react'
import CharacterList from './CharacterList';
import '../stylesheets/Home.scss'
import PropTypes from 'prop-types';
import Filter from './Filter';


const Home = props => {
    const { action, query, data } = props;

    return (
        <main>
            <Filter action={action} value={query} />
            <div>
                <CharacterList data={data} />
            </div>
        </main>
    )
}
Home.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    query: PropTypes.string.isRequired,
    action: PropTypes.object.isRequired,

};

export default Home;

