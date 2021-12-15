import React from 'react';

export default function BooksList({ books }) {
  return (
    <div>
      <div className="books">
        {books.map((item) => (
          <div className="book" key={item.id}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
