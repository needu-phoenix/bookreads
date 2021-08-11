import React, {Component} from 'react';
import Books from './Books'

class Shelf extends Component {

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this)
  }

  filterBooks(books,shelfName) {
    return books.filter(
      book => {
        return book.shelf === shelfName
      }
    )
  }

  handleChange(book,shelfName) {
    if(book.shelf !== shelfName){
      this.props.updateBookstore(book,shelfName);
    }
  }

  render() {
    const {books,shelfName} = this.props;

    let booksToRender = this.filterBooks(books,shelfName)

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <Books books={booksToRender} handleChange={this.handleChange} />
                </div>
        </div>
    )
  }
}

export default Shelf;