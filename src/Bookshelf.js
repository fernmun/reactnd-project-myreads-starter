import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

/**
 * @description Bookshelf stateless component
 * @param {string} title Title component
 * @param {Array} books List of books belong to shelf
 * @param {function} onUpdateBookShelf Update book shelf
 */
const Bookshelf = ({ title, books, onUpdateBookShelf }) => {
  /**
   * @description Render component structure
   * @param {JSX}
   */
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
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
Bookshelf.propTypes = {
  title: PropTypes.string,
  books: PropTypes.array,
  onUpdateBookShelf: PropTypes.func.isRequired
}

export default Bookshelf
