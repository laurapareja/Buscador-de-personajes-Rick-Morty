import React from 'react';
import { fetchInfoSerie } from '../services/fetchInfoSerie';
import '../stylesheets/App.scss';
import logo from '../images/logo.png';
import Home from './Home'
import { Switch, Route } from 'react-router-dom'
import CharacterDetail from './CharacterDetail'



class App extends React.Component {
  constructor(props) {
    super(props);

    const localStorageData = this.getData();
    this.state = localStorageData === null ? this._getInitialState() : localStorageData;

    this.saveData = this.saveData.bind(this);
    this.handleQuery = this.handleQuery.bind(this);

  }
  componentDidMount() {
    this.getData();
    this.saveData();
  }

  _getInitialState() {
    fetchInfoSerie()
      .then(data => {
        this.setState({
          characters: data.results,
          query: ''
        })
      })
  }
  handleQuery(event) {
    let queryInput = event.currentTarget.value;
    this.setState({
      query: queryInput
    },
      this.saveData
    )
  };

  getData() {
    return JSON.parse(localStorage.getItem("infoRick"));
  }

  saveData() {
    localStorage.setItem("infoRick", JSON.stringify(this.state));
  }

  render() {
    debugger
    if (this.state === null) {
      return <p>Loading</p>
    }
    const filteredCharacters = this.state.characters.filter(mycharacter => {
      return mycharacter.name.toUpperCase().includes(this.state.query.toUpperCase());
    });

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
              />
            )
          }} />

          <Route path="/character-detail/:characterId" render={routerProps => {
            return (
              <CharacterDetail
                routerProps={routerProps}
                data={this.state.characters}
              />
            )
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
