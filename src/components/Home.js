import React from 'react'
import CharacterList from './CharacterList';
import '../stylesheets/Home.scss'
import PropTypes from 'prop-types';
import Filters from './Filters';


const Home = props => {
    const { action, query, data, status, favorites, actionFavorites, info, actionStatus } = props;

    return (
        <React.Fragment>
            <main className="main">
                <Filters action={action} value={query} data={favorites} actionFavorites={actionFavorites} info={info} actionStatus={actionStatus} />
                <div>
                    <CharacterList data={data} favorites={favorites} status={status} />
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

