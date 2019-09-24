import React from 'react';
import '../stylesheets/Filter.scss';
import PropTypes from 'prop-types';
import Favorites from './Favorites';



const Filters = props => {
    const { action, value, data, actionFavorites, info } = props;
    return (
        <div className="searchContainter">
            <label htmlFor="query"></label>
            <input type="text" id="query" onChange={action} value={value} className="searchBox"></input>
            {/* quitar data si no lo uso */}
            <Favorites data={data} actionFavorites={actionFavorites} info={info} />
        </div>
    )
}

Filters.propTypes = {
    action: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    // actionFavorite: PropTypes.func.isRequired,

};

export default Filters;