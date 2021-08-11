import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
        BooksAPI.search(query)
            .then(books => this.setState({books}))
    }

    handleChange(book,shelfName){
        book.shelf = shelfName;
        BooksAPI.update(book,shelfName)
            .then(book => this.props.handleChange())
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
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

export default Search