import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Shelf from './Shelf';

class Home extends Component {

  constructor(props){
    super(props);

    this.updateBookstore = this.updateBookstore.bind(this)
  }

  state = {
    shelves: ['currentlyReading','wantToRead','read']
  }

  updateBookstore(book,shelfName) {
    BooksAPI.update(book,shelfName)
      .then(obj => this.props.handleChange())
  }
  

  render() {
    return (
       <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf shelfName={this.state.shelves[0]} books={this.props.books} updateBookstore={this.updateBookstore} shelfTitle="Currently Reading"/>
                <Shelf shelfName={this.state.shelves[1]} books={this.props.books} updateBookstore={this.updateBookstore} shelfTitle="Want to Read"/>
                <Shelf shelfName={this.state.shelves[2]} books={this.props.books} updateBookstore={this.updateBookstore} shelfTitle="Read"/>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>
                <button>Add a book</button>
              </Link>
            </div>
        </div>
    )
  }
}

export default Home