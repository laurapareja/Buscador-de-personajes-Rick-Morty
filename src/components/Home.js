import React from 'react'
import CharacterList from './CharacterList';
import '../stylesheets/Home.scss'
import PropTypes from 'prop-types';
import Filters from './Filters';


const Home = props => {
    const { action, query, data, favorites, actionFavorites, info } = props;

    return (
        <React.Fragment>
            <Filters action={action} value={query} data={favorites} actionFavorites={actionFavorites} info={info} />
            <main className="main">
                <div>
                    <CharacterList data={data} favorites={favorites} />
                </div>
            </main>
        </React.Fragment>
    )
}
Home.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    query: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Home;

