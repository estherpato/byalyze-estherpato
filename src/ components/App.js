import React, { Component, Fragment } from 'react';
import Header from './Header';
import CatList from './CatList';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    };
  }

  componentDidMount() {
    if (!!JSON.parse(localStorage.getItem('cats'))) {
      this.setState({ cats: JSON.parse(localStorage.getItem('cats')) })
    } else {
      this.getCatsList();
    }
  }

  getCatsList() {
    const options = {
      headers: {
        'x-api-key': '74fd8279-19b2-4f75-bba5-e879d420047d'
      }
    }
    fetch('https://api.thecatapi.com/v1/breeds', options)
      .then(response => response.json())
      .then(cats => {
        this.setState({ cats }, this.setLocalStorage);
      });
  }

  setLocalStorage() {
    localStorage.setItem('cats', JSON.stringify(this.state.cats));
  }

  render() {
    return (
      <Fragment>
        <Header></Header>
        <CatList
          cats={this.state.cats}
        ></CatList>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default App;
