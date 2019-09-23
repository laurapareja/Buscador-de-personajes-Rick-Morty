import React from 'react';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="app">
        Hola Mundo
      </div>
    );
  }
}

export default App;
