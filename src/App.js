import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import * as BooksAPI from './BooksAPI';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
  }

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState({books}))
  }

  handleChange() {
    BooksAPI.getAll()
      .then(books => this.setState(
        () => {
          return {books}
        }
      ))
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path='/'>
            <Home books={this.state.books} handleChange={this.handleChange} />
          </Route>
          <Route path='/search'>
            <Search handleChange={this.handleChange} />
          </Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default App