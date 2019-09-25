import React from 'react';
import '../stylesheets/Filter.scss';
import PropTypes from 'prop-types';
import Favorites from './Favorites';
import SpecieFilter from './SpecieFilter';



const Filters = props => {
    const { action, value, data, actionFavorites, info, actionStatus } = props;
    return (
        <div className="searchContainter">
            <label htmlFor="query"></label>
            <input type="text" id="query" onChange={action} value={value} className="searchBox"></input>
            {/* quitar data si no lo uso */}
            <Favorites data={data} actionFavorites={actionFavorites} info={info} />
            <SpecieFilter info={info} actionStatus={actionStatus} />
        </div>
    )
}

Filters.propTypes = {
    action: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Filters;