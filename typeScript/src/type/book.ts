export type BookStatus = 'Lido' | 'Não lido';

export interface Book{
    _id?: string;
    title: string;
    author: string;
    status: BookStatus;
}

export interface BookFormData{
    title: string;
    author: string;
    status: BookStatus;
}

export interface BookFormProps{
    onBookAdded: (newBook: Book) => void;
}

export interface BookItemProps{
    book: Book;
    onDelete: (id: string) => void;
    onToggleStatus?: (updatedBook: Book) => void;
}

export interface BookListProps{
    books: Book[];
    onDeleteBook: (id: string) => void;
    onToggleStatus?: (updatedBook: Book) => void
}
