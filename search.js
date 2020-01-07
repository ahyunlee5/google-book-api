import React from 'react';

export default function Search(props) {
  return (
    <form id="book-form" onSubmit={props.handleSearch}>
      <label htmlFor="search">Search</label>
      <input id="search" required />
      <button>Search</button>
    </form>
  );
}