import React, {Component} from 'react';
import Home from './components/Home';
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
      <div className="app">
        <Home books={this.state.books} handleChange={this.handleChange} />
      </div>
    )
  }
}

export default App