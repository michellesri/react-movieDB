import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App loading={true} />,
  document.getElementById('root')
);

fetch('http://www.omdbapi.com/?s=Star%20Wars&plot=short&r=json')
  .then(res => res.json())
  .then(movies => {
    console.log('Fetched movies:', movies);
    ReactDOM.render(
      <App loading={false} movieList={movies}/>,
      document.getElementById('root')
    );
  })
  ;
