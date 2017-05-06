import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let loading = true;

ReactDOM.render(
  <App loading={loading}/>,
  document.getElementById('root')
);

let form = document.getElementById('formButton');
form.addEventListener('click', e => {
  e.preventDefault();
  readForm();
});

function App(props) {
  if(props.loading) {
    return (
      <div>
        <MovieForm />
      </div>
    );
  } else {
    const moviesList = props.movies.Search.map(movie => (
        <Movies
          movie={movie}
          key={movie.imdbID}
        />
    )
  );

    return (
      <table>
        <tbody>
          <tr>
            <th>
              IMDBID
            </th>
            <th>
              Title
            </th>
            <th>
              Release Date
            </th>
            <th>
              Poster
            </th>
          </tr>
          {moviesList}
        </tbody>
      </table>
    );
  }
}

function Movies(props) {
  console.log(props.movie);
  return (
    <tr>
      <td>{props.movie.imdbID}</td>
      <td>{props.movie.Title}</td>
      <td>{props.movie.Year}</td>
      <td><img alt="movie poster" src={props.movie.Poster} /></td>
    </tr>
  );
}

function MovieForm(props) {
  return (
    <form id="movieForm">
      Title:<br />
      <input type="text" name="Title" /><br />
      <button id="formButton" type="submit" value="Submit">Submit</button>
    </form>
  );
}

function readForm() {
  var formTitle = document.getElementById('movieForm').elements.item(0).value;
  let title = '';
  formTitle = formTitle.split(' ');
  formTitle.forEach((str, i) => {
    if (i < formTitle.length - 1) {
      str += '%20';
      title += str;
    } else {
      title += str;
    }
  });
  let search = 'http://www.omdbapi.com/?s=' + title + '&plot=short&r=json';
  return fetch(search)
  .then(res => res.json())
  .then(movies => {
    loading = false;
    ReactDOM.render(
      <App movies={movies} loading={loading}/>,
      document.getElementById('root')
    );
  });
}
