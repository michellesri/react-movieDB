import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log('Running render! Properties:', this.props);
    if (!this.props.loading) {
      console.log('The movies are in:', this.props.movieList);
      this.movieArray = this.props.movieList.Search.map(movie => (
        <li key={movie.imdbID} >
          {movie.Title}
        </li>
      ));
    }
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Go-To-The-Movies</h2>
        </div>
        <ul>
          {this.movieArray}
        </ul>
      </div>
    );
  }
}

export default App;
