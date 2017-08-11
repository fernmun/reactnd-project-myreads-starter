import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class ListBooks extends React.Component {
  render() {
    const allBooks = [
      {
        books: this.props.books.filter(book => book.shelf === 'currentlyReading'),
        title: 'Currently Reading'
      },
      {
        books: this.props.books.filter(book => book.shelf === 'wantToRead'),
        title: 'Want To Read'
      },
      {
        books: this.props.books.filter(book => book.shelf === 'read'),
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
                <Bookshelf key={index} title={group.title} books={group.books} />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

ListBooks.PropTypes = {
  books: PropTypes.array.isRequired
}

export default ListBooks
