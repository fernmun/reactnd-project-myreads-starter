import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

const ListBooks = ({ books, onUpdateBookShelf }) => {
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

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {allBooks.map((group, index) => (
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

ListBooks.PropTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBookShelf: PropTypes.func
}

export default ListBooks
