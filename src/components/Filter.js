import React from 'react';

const Filter = props => {
    const { action, value } = props;
    return (
        <div>
            <label htmlFor="query"></label>
            <input type="text" id="query" onChange={action} value={value}></input>
        </div>
    )
}

export default Filter;