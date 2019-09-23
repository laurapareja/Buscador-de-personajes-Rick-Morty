import React from 'react';
import '../stylesheets/Filter.scss';
import PropTypes from 'prop-types';



const Filter = props => {
    const { action, value } = props;
    return (
        <div className="searchContainter">
            <label htmlFor="query"></label>
            <input type="text" id="query" onChange={action} value={value} className="searchBox"></input>
        </div>
    )
}

Filter.propTypes = {
    action: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired
};

export default Filter;