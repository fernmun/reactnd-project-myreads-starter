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

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks />
        )} />
      <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
