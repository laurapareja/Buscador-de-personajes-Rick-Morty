import React from 'react';
import '../stylesheets/Filter.scss';
import PropTypes from 'prop-types';
// import Favorites from './Favorites';



const SearchContainter = props => {
    const { action, value, data } = props;
    return (
        <div className="searchContainter">
            <label htmlFor="query"></label>
            <input type="text" id="query" onChange={action} value={value} className="searchBox"></input>
        </div>
    )
}

SearchContainter.propTypes = {
    action: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SearchContainter;