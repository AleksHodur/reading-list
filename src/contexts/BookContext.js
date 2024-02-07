import React, { createContext, useState } from 'react';
import {v1 as uuid} from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'the colour of magic', author: 'terry pratchett', id: 1},
        {title: 'the name of the wind', author: 'patrick rothfuss', id: 2},
        {title: 'the final empire', author: 'brandon sanderson', id: 3}
    ]);

    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuid()}]);
    }

    const deleteBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }

    return (
        <BookContext.Provider value={{books, addBook, deleteBook}}>
            { props.children }
        </BookContext.Provider>
    );
}

export default BookContextProvider;
