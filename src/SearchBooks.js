import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'

/**
 * @description SearchBooks stateless component
 * @param {Array} books List of books to show on the search page
 * @param {function} onSearchBook Return books given a query
 * @param {funcion} onUpdateBookShelf Update book shelf
 */
const SearchBooks = ({ books, onSearchBook, onUpdateBookShelf }) => {
  /**
   * @description Trigger onSearchBook function
   * @param {Object} e Event object
   */
  const handleChange = (e) => {
    onSearchBook(e.target.value)
  }

  /**
   * @description Render component structure
   * @param {JSX}
   */
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

/**
 * Define property types
 * @type {Object}
 */
SearchBooks.PropTypes = {
  books: PropTypes.array,
  onSearchBook: PropTypes.func,
  onUpdateBookShelf: PropTypes.func,
}

export default SearchBooks
