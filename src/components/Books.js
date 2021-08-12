import React, {Component} from "react";

class Books extends Component {
    render() {
        let {books} = this.props;
        let renderedBooks  = books.map(book => {
                return (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                                <div className="book-shelf-changer">
                                    <select defaultValue={book.shelf} onChange={(event) => this.props.handleChange(book,event.target.value)}>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </li>
                )
            })

        return (
            <ol className="books-grid">
                {renderedBooks}
            </ol>
        )
    }
}

export default Books;