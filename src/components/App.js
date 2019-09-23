import React from 'react';
import { fetchInfoSerie } from '../services/fetchInfoSerie';
import '../stylesheets/App.scss';
import logo from '../images/logo.png';
import CardCharacter from './CardCharacter'

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
    })
    this.saveData();
    console.log(localStorage)
  }

  getData() {
    return JSON.parse(localStorage.getItem("info"));
  }

  saveData() {
    localStorage.setItem("info", JSON.stringify(this.state));
  }

  render() {
    if (this.state === null) {
      return <p>Loading</p>
    }
    const data = this.state;

    return (
      <div className="app">
        <header><img className="logo" src={logo} alt="Web de Rick & Morty" /></header>
        <main>
          <label htmlFor="query"></label>
          <input type="text" id="query" onChange={this.handleQuery} value={data.query}></input>
          <div>
            <ul>
              <CardCharacter query={data.query} data={this.state.characters} />
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
