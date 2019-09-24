import React from 'react';
import '../stylesheets/Filter.scss';
import PropTypes from 'prop-types';
import Favorites from './Favorites';

const Filters = props => {
    const { action, value, data, actionFavorites, info } = props;
    return (
        <div className="searchContainter">
            <div>
                <label htmlFor="query"></label>
                <input type="text" id="query" onChange={action} value={value} className="searchBox"></input>

            </div>
            <Favorites data={data} actionFavorites={actionFavorites} info={info} />
        </div>
    )
}

Filters.propTypes = {
    action: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Filters;