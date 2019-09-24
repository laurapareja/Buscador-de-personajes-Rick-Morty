import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Favorites.scss';



const Favorites = props => {
    const { data } = props;
    const list = data.map((item, index) => {
        return <li className="favoriteCharacter" key={index}>{item}</li>
    })

    return (
        <div>
            <button className="favoriteContainer" >
                Favoritos
             </button>
            <div>
                {list}
            </div>

        </div>

    )
}

Favorites.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Favorites;