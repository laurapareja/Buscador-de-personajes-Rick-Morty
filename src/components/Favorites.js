import React from 'react';
import '../stylesheets/Favorites.scss';
import PropTypes from 'prop-types'



const Favorites = props => {
    const { actionFavorites, info } = props;
    console.log(info.checkedFavorite)
    const handleClickFavorite = (event) => {
        actionFavorites(event)
    }

    const buttonStatus = info.checkedFavorite === true ? 'buttonclicked' : 'button';

    return (
        <div>
            <button onClick={handleClickFavorite} className={buttonStatus}>
                Ver favoritos
            </button>
        </div>
    )
}

Favorites.propTypes = {
    actionFavorite: PropTypes.func.isRequired,
};

export default Favorites;