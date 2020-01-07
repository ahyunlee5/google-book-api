import React from 'react';

function Book(props) {
  let image;
  if (props.book.smallThumbnail) {
    image = <img src={props.book.smallThumbnail} alt="some alt text" />;
  }
  return (
    <div className="Book">
      {image}
      <h2>{props.book.title}</h2>
      <p>Author: {props.book.authors}</p>
      <p>Price: {props.book.listPrice}</p>
      <p>{props.book.description}</p>
    </div>
  );
}

export default Book;