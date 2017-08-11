import React from 'react'
import PropTypes from 'prop-types'

const Book = ({book}) => {
  const renderBookCover = (path) => {
    return (
      <div
        className="book-cover"
        style={{ width: 128, height: 193, backgroundImage: `url(${path})` }}
      />
    )
  }

  return (
    <div className="book">
      <div className="book-top">
        {renderBookCover(book.imageLinks.thumbnail)}
        <div className="book-shelf-changer">
          <select>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors.map((author, index) => (
        <div key={index} className="book-authors">{author}</div>
      ))}
    </div>
  )
}

Book.PropTypes = {
  book: PropTypes.object.isRequired
}

export default Book
