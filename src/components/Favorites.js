import React from 'react';
import '../stylesheets/Favorites.scss';
import PropTypes from 'prop-types'



const Favorites = props => {
    const { actionFavorites, info } = props;
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
    info: PropTypes.object.isRequired,
};

export default Favorites;