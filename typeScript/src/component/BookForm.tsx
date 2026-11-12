import React, { useState } from 'react';
import { api } from '../service/api';
import { Book, BookFormData, BookFormProps, BookStatus } from '../type/book';

export const BookForm: React.FC<BookFormProps> = ({ onBookAdded }) => {
    const [FormData, setFormData] = useState<BookFormData>({
        title: '',
        author: '',
        status: 'Não lido',
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'status' ? (value as BookStatus) : value,
        }));
    };

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        if (!FormData.title.trim() || !FormData.author.trim()) return;

        setLoading(true);
        setError(null);

        try{
            const response = await api.post<Book>('/books', FormData);
            onBookAdded(response.data);
            setFormData({ title: '', author: '', status: 'Não lido'});

        } catch (err){
            setError('Erro ao cadastrar livro... tente novamente');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return(
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem'}}>
            <h2>Adicionar novo livro</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div style={{ marginBottom: '1rem' }}>
                <input
                    type='text'
                    name='title'
                    placeholder='Título do livro'
                    value={FormData.title}
                    onChange={handleChange}
                    required
                />
            </div>

            <div style={{ marginBottom: '1rem'}}>
                <input
                    type='text'
                    name='author'
                    placeholder='Autor do livro'
                    value={FormData.author}
                    onChange={handleChange}
                    required
                />
            </div>


            <div style={{ marginBottom: '1rem' }}>
                <select
                    name='status'
                    value={FormData.status}
                    onChange={handleChange}
                >
                    <option value="Não lido">Não lido</option>
                    <option value="Lido">Lido</option>
                </select>

            </div>
            <button type='submit' disabled={loading}>
                {loading ? 'Cadastrando...' : 'Cadastrar livro'}
            </button>
        </form>

    );
};

