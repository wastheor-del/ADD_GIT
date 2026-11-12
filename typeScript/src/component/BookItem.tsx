import React, {useState} from "react";
import { api } from '../service/api';
import { BookItemProps, BookStatus } from "../type/book";

export const BookItem: React.FC<BookItemProps> = ({
    book,
    onDelete,
    onToggleStatus,
}) => {
    const [ loading, setLoading ] = useState<boolean>(false);
    
    const handleDelete = async () => {
        if (!book._id) return;
        setLoading(true);

        try {
            await api.delete(`/books/${book._id}`);
            onDelete(book._id);
        } catch (err){
            console.error('Erro ao remover livro:', err);
            alert('Falha ao remover o livro');
        } finally{
            setLoading(false);
        }
    };

    const handleToggleStatus = async () => {
        if (!book._id || !onToggleStatus) return;
        setLoading(true);

        const updatedStatus: BookStatus =
            book.status === 'Lido' ? 'Não lido' : 'Lido';
        const payload = {
            title: book.title,
            author: book.author,
            status: updatedStatus,
        };

        try{
            await api.put(`/books/${book._id}`, payload);
            onToggleStatus({ ...book, status: updatedStatus});
        } catch (err){
            console.error('Erro ao atualizar status:', err);
            alert('Falha ao atualizar o status');
        } finally{
            setLoading(false);
        }
    };

    return(
        <li
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.5rem',
                borderBottom: '1px solid #ccc',
            }}
        >
            <div>
                <strong>{book.title}</strong> - {book.author}{''}
                <span style={{ fontSize: '0.85rem', color: '#666'}}>
                    ({book.status})
                </span>
            </div>

            <div>
                {onToggleStatus && (
                    <button 
                        onClick={handleToggleStatus}
                        disabled={loading}
                        style={{ marginRight: '0.5rem' }}
                    >
                        Marcar como {book.status === 'Lido' ? 'Não lido': 'Lido'}

                    </button>
                )}
                <button onClick={handleDelete} disabled={loading}>
                    {loading ? 'Removendo...' : 'Excluir'}
                </button>
            </div>

        </li>
    );
};
