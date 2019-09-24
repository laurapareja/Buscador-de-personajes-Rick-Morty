import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { fetchInfoSerie } from '../services/fetchInfoSerie';
import Home from './Home'
import CharacterDetail from './CharacterDetail'
import logo from '../images/logo.png';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    const localStorageData = this.getData();
    this.state = localStorageData === null ? this._getInitialState() : localStorageData;

    this.saveData = this.saveData.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleQueryFavorites = this.handleQueryFavorites.bind(this);
  }

  //estado inicial antes de pintar
  componentDidMount() {
    this.getData();
    this.saveData();
  }
  //obtengo datos del fetch y actualizo el estado
  _getInitialState() {
    fetchInfoSerie()
      .then(data => {
        this.setState({
          characters: data.results,
          query: '',
          favorites: [],
          checkedFavorite: false,
        })
      })
  }

  //obtengo los datos del localstorage
  getData() {
    return JSON.parse(localStorage.getItem("infoRick"));
  }
  //guardo los datos en el localstorage
  saveData() {
    localStorage.setItem("infoRick", JSON.stringify(this.state));
  }

  //actualizo el estado con la búsqueda de nombre que hacemos en el input-text ./Filters
  handleQuery(event) {
    let queryInput = event.currentTarget.value;
    this.setState({
      query: queryInput
    },
      this.saveData
    )
  };

  //actualizo el estado favoritos, incluyendo los elementos seleccionados/favoritos en ./CharacterDetail
  handleFavorite(event) {
    let favoriteList = this.state.favorites;
    let favorite = event.currentTarget.value;

    if (favoriteList.includes(favorite)) {
      const indexFavorite = favoriteList.indexOf(nameCharacter => nameCharacter === favorite);
      favoriteList.splice(indexFavorite, 1);
    } else {
      favoriteList.push(favorite);
    }
    // actualizo el estado
    this.setState({
      favorites: favoriteList
    },
      //guardo en localstorage
      this.saveData
    )
  }

  // actualizo búsqueda por favoritos cuando el usuario clicka botón/favorito en ./Filters
  handleQueryFavorites(event) {
    if (this.state.checkedFavorite === false) {
      this.setState({
        checkedFavorite: true
      },
        this.saveData
      )
    } else {
      //actualizo el estado
      this.setState({
        checkedFavorite: false
      },
        //actualizo el localstorage
        this.saveData
      )
    }
  }

  //renderizamos!
  render() {
    //cuando aún no tenemos estado, al abrir la página sin datos en localstorage& y aún está buscando la info en el fetch
    if (this.state === null) {
      return <p>Loading</p>
    }
    //los datos filtrados que vamos a pintar en el return
    let filteredCharacters;

    // cuando no hemos clickado al boton favoritos ./Filters devolvemos los elementos filtrados por el buscador input-text
    if (this.state.checkedFavorite === false && this.state.query !== null) {
      filteredCharacters = this.state.characters
        .filter(mycharacter => {
          return mycharacter.name.toUpperCase().includes(this.state.query.toUpperCase())
        });
    } else { // cuando clickamos boton favoritos ./Filters se hacen ambos filtros
      filteredCharacters = this.state.characters
        .filter(mycharacter => {
          return this.state.favorites.includes(mycharacter.name);
        })
        .filter(mycharacter => {
          return mycharacter.name.toUpperCase().includes(this.state.query.toUpperCase())
        })
    }

    return (
      <div className="app">
        <header className="header"><img className="logo" src={logo} alt="Web de Rick & Morty" /></header>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Home
                action={this.handleQuery}
                query={this.state.query}
                data={filteredCharacters}
                info={this.state}
                favorites={this.state.favorites}
                actionFavorites={this.handleQueryFavorites}
                actionStatus={this.updateQueryStatus}
              />
            )
          }} />

          <Route path="/character-detail/:characterId" render={routerProps => {
            return (
              <CharacterDetail
                routerProps={routerProps}
                data={this.state.characters}
                action={this.handleFavorite}
                favorites={this.state.favorites}
              />
            )
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
