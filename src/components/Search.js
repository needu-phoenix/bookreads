import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';
import Books from './Books';


class Search extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.searchBookStore = this.searchBookStore.bind(this);
    }

    state = {
        books: []
    }

    searchBookStore(query){
        BooksAPI.query(query)
            .then(books => this.setState({books}))
    }

    handleChange(book,shelfName){
        book.shelf = value;
        BooksAPI.update(book,shelfName)
            .then(book => this.props.handleChange())
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search">Close</button>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange ={(event) => this.searchBookStore(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <Books books={this.state.books} handleChange={this.handleChange}/>
                    </ol>
                </div>
            </div>
        )
    }
}