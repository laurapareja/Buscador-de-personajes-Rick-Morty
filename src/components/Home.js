import React from 'react'
import CharacterList from './CharacterList';
import '../stylesheets/Home.scss'
import PropTypes from 'prop-types';
import SearchContainer from './SearchContainer';


const Home = props => {
    const { action, query, data, favorites } = props;

    return (
        <React.Fragment>
            <SearchContainer action={action} value={query} data={favorites} />
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

};

export default Home;

