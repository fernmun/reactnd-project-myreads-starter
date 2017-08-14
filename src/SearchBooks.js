import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'

const SearchBooks = ({ books, onSearchBook, onUpdateBookShelf }) => {
  const handleChange = (e) => {
    onSearchBook(e.target.value)
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book book={book} onUpdateBookShelf={onUpdateBookShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

SearchBooks.PropTypes = {
  books: PropTypes.array,
  onSearchBook: PropTypes.func,
  onUpdateBookShelf: PropTypes.func,
}

export default SearchBooks
