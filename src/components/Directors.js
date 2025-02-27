import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director=>{
        return <div>
          <h2>{director.name}</h2>
          Movies:<br/>
          {director.movies.map(movie=>{return <li>{movie}</li>})}
        </div>
      })}
    </div>
  );
}

export default Directors
