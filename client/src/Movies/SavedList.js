import React from 'react';
import {Route, NavLink} from 'react-router-dom';


const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie"><NavLink to={`/movie/${movie.id}`}>
        {movie.title}</NavLink></span>
    ))}
    <div className="home-button"onClick ={() => props.history.push('/')}>Home</div>
    <Route exact to={'/'}/>
    <Route to={'/movie/id'}/>
  </div>
);

export default SavedList;
