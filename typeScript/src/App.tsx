import { useEffect, useState } from "react";
import { BookForm } from "./component/BookForm";
import { BookList } from "./component/BookList";
import { api } from "./service/api";
import type { Book } from "./type/book";

export function App() {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchBooks = async () =>{
        setLoading(true);
        setError(null);

        try{
            const response = await api.get<Book[]>('/books');
            setBooks(response.data);
        } catch (err){
            setError('Não foi possível carregar a lista de livros');
            console.error(err);
        } finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks();
    },[]);

    const handleBookAdded = (newBook: Book) =>{
        setBooks((prevBooks) => [...prevBooks, newBook]);
    };

    const handleBookDeleted = (id: string) =>{
        setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
    };

    const handleToggleStatus = (updateBook: Book) =>{
        setBooks((prevBooks) =>
            prevBooks.map((book) =>
                book._id ===updateBook._id ? updateBook : book
            )
        );
    };

    return(
        <main style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
            <h1>Catálogo de livros</h1>
            <BookForm onBookAdded={handleBookAdded} />

            <h2>Lista de livros</h2>
            {loading && <p>Carregando livros...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!loading && !error && (
                <BookList
                    books={books}
                    onDeleteBook={handleBookDeleted}
                    onToggleStatus={handleToggleStatus}
                />
            )}

        </main>
    );
}

