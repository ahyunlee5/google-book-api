import React from 'react';

export default function Search(props) {
  return (
    <div className="Filter">
      <select onChange={props.handlePrintChange} id="print-type" form="book-form" name="printType">
        <option value="all">All</option>
        <option value="books">Books</option>
        <option value="magazines">Magazines</option>
      </select>
      <select onChange={props.handleTypeChange} id="book-type" form="book-form" name="bookType">
        <option value="no-filter">No Filter</option>
        <option value="ebooks">eBooks</option>
        <option value="free-ebooks">Free eBooks</option>
        <option value="full">Full</option>
        <option value="paid-ebooks">Paid eBooks</option>
        <option value="partial">Partial</option>
      </select>
    </div>
  );
}