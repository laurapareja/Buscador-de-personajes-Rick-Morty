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
    this.handleQueryStatus = this.handleQueryStatus.bind(this);

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
          statusquery: [],
          checkedStatus: false,
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

  handleQueryStatus(statusSelected) {
    let statusQueryArray = this.state.statusquery;

    if (statusQueryArray.includes(statusSelected)) {
      const indexStatus = statusQueryArray.indexOf(statusCharacter => statusCharacter === statusSelected);
      statusQueryArray.splice(indexStatus, 1);

    } else {
      statusQueryArray.push(statusSelected);
    }
    // actualizo el estado
    this.setState({
      statusquery: statusQueryArray
    },
      //guardo en localstorage
      this.saveData
    )

    if (this.state.checkedStatus === false) {
      this.setState({
        checkedStatus: true
      })
    } else {
      this.setState({
        checkedStatus: false
      })
    }
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

    if (this.state === null) {
      return <p>Loading</p>
    }
    let filteredCharacters;



    // if (this.state.statusquery === true) {
    //   filteredCharacters = this.state.characters
    //     .filter(mycharacter => {
    //       return this.state.statusquery.includes(mycharacter.status);
    //     })
    // }
    if (this.state.query !== null && this.state.checkedFavorite === false) {
      filteredCharacters = this.state.characters
        .filter(mycharacter => {
          return mycharacter.name.toUpperCase().includes(this.state.query.toUpperCase())
        })
        ;
    }
    if (this.state.checkedStatus === true) {
      filteredCharacters = this.state.characters
        .filter(mycharacter => {
          return mycharacter.name.toUpperCase().includes(this.state.query.toUpperCase())
        })
        .filter(mycharacter => {
          return this.state.statusquery.includes(mycharacter.status);
        })
    }

    if (this.state.query !== null && this.state.checkedFavorite === true) {
      filteredCharacters = this.state.characters
        .filter(mycharacter => {
          return mycharacter.name.toUpperCase().includes(this.state.query.toUpperCase())
        })
        .filter(mycharacter => {
          return this.state.favorites.includes(mycharacter.name);
        })
    }

    // da errores si seleccionas más de un status

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
                actionStatus={this.handleQueryStatus}
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
