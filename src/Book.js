import React from 'react'
import PropTypes from 'prop-types'

/**
 * @description Book stateless component
 * @param {Object} book All book data
 * @param {function} onUpdateBookShelf Update book shelf
 */
const Book = ({ book, onUpdateBookShelf }) => {
  /**
   * @description Trigger onUpdateBookShelf method
   * @param {Object} e Event object
   */
  const handleChange = (e) => {
    onUpdateBookShelf(book, e.target.value)
  }

  /**
   * @description Render book cover structure
   * @param {string} path Image path
   * @returns {JSX} Book cover structure
   */
  const renderBookCover = (path) => {
    return (
      <div
        className="book-cover"
        style={{ width: 128, height: 193, backgroundImage: `url(${path})` }}
      />
    )
  }

  /**
   * @description Render component structure
   * @param {JSX} Component structure
   */
  return (
    <div className="book">
      <div className="book-top">
        {book.imageLinks && renderBookCover(book.imageLinks.thumbnail)}
        <div className="book-shelf-changer">
          <select defaultValue={book.shelf || 'none'} onChange={handleChange}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors && book.authors.map((author, index) => (
        <div key={index} className="book-authors">{author}</div>
      ))}
    </div>
  )
}

/**
 * Define property types
 * @type {Object}
 */
Book.PropTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBookShelf: PropTypes.func
}

export default Book
