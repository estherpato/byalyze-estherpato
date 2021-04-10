import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    };
  }

  componentDidMount() {
    const options = {
      headers: {
        'x-api-key': '74fd8279-19b2-4f75-bba5-e879d420047d'
      }
    }
    fetch('https://api.thecatapi.com/v1/breeds', options)
      .then(response => response.json())
      .then(cats => {
        this.setState({ cats });
      });
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default App;
