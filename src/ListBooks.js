import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

/**
 * @description ListBooks stateless component
 * @param {Array} books List of books to show on main page
 * @param {function} onUpdateBookShelf Update book shelf
 */
const ListBooks = ({ books, onUpdateBookShelf }) => {
    /**
     * @description Books filtered by shelf
     * @type {Array}
     */
    const allBooks = [
      {
        books: books.filter(book => book.shelf === 'currentlyReading'),
        title: 'Currently Reading'
      },
      {
        books: books.filter(book => book.shelf === 'wantToRead'),
        title: 'Want To Read'
      },
      {
        books: books.filter(book => book.shelf === 'read'),
        title: 'Read'
      }
    ]

    /**
     * @description Render component structure
     * @param {JSX}
     */
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {allBooks && allBooks.map((group, index) => (
                <Bookshelf
                  key={index}
                  title={group.title}
                  books={group.books}
                  onUpdateBookShelf={onUpdateBookShelf}
                />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
}

/**
 * Define property types
 * @type {Object}
 */
ListBooks.propTypes = {
  books: PropTypes.array,
  onUpdateBookShelf: PropTypes.func.isRequired
}

export default ListBooks
