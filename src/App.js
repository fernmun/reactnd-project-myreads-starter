import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import { debounce } from 'throttle-debounce'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

/**
 * @description Container component to handle app workflow
 */
class BooksApp extends React.Component {
  /**
   * State object
   * @type {Object}
   */
  state = {
    books: [],
    foundBooks: []
  }

  /**
  * @description Add debounce function to limit ajax calls on search method
  * @constructor
  */
  constructor() {
    super()

    this.SearchBook = debounce(this.searchBook, 200)
  }

  /**
   * @description Get all books from BooksAPI to be listed
   */
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      if (books && books.length) {
        this.setState({ books })
      }
    })
  }

  /**
   * @description Clean foundBooks on state object
   */
  componentWillReceiveProps() {
    this.setState({ foundBooks: [] })
  }

  /**
   * @description Update book shelf on state object and on BooksAPI as well
   * @param  {Object} book  Book object
   * @param  {string} shelf Book shelf
   */
  updateBookShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(previousState => ({
        books: previousState.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
  }

  /**
   * @description Update foundBooks on state object either with all given books
   * by BooksAPI or empty array if query is not defined
   * @param  {string} query Key words
   */
  searchBook(query) {
    if (query !== 'undefined' && query !== '') {
      BooksAPI.search(query).then(foundBooks => {
        if (foundBooks && foundBooks.length) {
          foundBooks = foundBooks.map((b) => {
            this.state.books
              .filter((book) => book.id === b.id)
              .map((book) => b.shelf = book.shelf)

            return b
          })

          this.setState({ foundBooks })
        } else {
          this.setState({ foundBooks: [] })
        }
      })
    } else {
      this.setState({ foundBooks: [] })
    }
  }

  /**
   * @description Render component
   * @returns {JSX} App wrapper with SearchBooks and ListBooks components
   */
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
