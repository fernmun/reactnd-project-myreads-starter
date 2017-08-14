import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    foundBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      if (books && books.length) {
        this.setState({ books })
      }
    })
  }

  updateBookShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(
      this.setState(state => {
        // Check if book updated is listed on the main page, if not get all books.
        if (state.books.filter(bookItem => bookItem.id == book.id).length > 0) {
          books: state.books.map(item =>
            item.shelf = item.id === book.id ? shelf : item.shelf
          )
        }
        else {
          BooksAPI.getAll().then((books) => {
            if (books && books.length) {
              this.setState({ books })
            }
          })
        }
      })
    )
  }

  searchBook(query) {
    if (query !== 'undefined') {
      BooksAPI.search(query).then(foundBooks => {
        if (foundBooks && foundBooks.length) {
          this.setState({ foundBooks })
        }
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks
            books={this.state.foundBooks}
            onUpdateBookShelf={(book, shelf) => {
              this.updateBookShelf(book, shelf)
            }}
            onSearchBook={(query) => {
              this.searchBook(query)
            }}
          />
        )} />
      <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            onUpdateBookShelf={(book, shelf) => {
              this.updateBookShelf(book, shelf)
            }}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
