import React from 'react';

export default function FilmsList({ films }) {
  return (
    <div>
      <div className="films">
        {films.map((item) => (
          <div className="film" key={item.id}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
