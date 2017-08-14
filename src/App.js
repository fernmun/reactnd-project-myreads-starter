import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBookShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(
      this.setState(state => {
        books: state.books.map(item =>
          item.shelf = item.id === book.id ? shelf : item.shelf
        )
      })
    )
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks />
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
