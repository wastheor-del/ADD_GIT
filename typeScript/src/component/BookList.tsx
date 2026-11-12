import React from "react";
import { BookListProps } from "../type/book";
import { BookItem } from './BookItem';

export const BookList: React.FC<BookListProps> =({
    books,
    onDeleteBook,
    onToggleStatus,
}) => {
    if (books.length === 0){
        return <p>Nenhum livro cadastrado</p>;
    }

    return(
        <ul style={{ listStyle: 'none', padding: 0}}>
            {books.map((book) => (
                <BookItem
                    key={book._id}
                    book={book}
                    onDelete={onDeleteBook}
                    onToggleStatus={onToggleStatus}
                />
            ))}
        </ul>
    );
};
