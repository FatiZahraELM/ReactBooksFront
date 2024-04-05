import { Table, Button } from 'react-bootstrap';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/user.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllBooks ,deleteBook} from '../services/booksService';
import axios, { AxiosError } from 'axios';
import { Book } from '../models/book';




const BookList = () => {
    const [books, setBooks] = useState<Book[]>([]);
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const data = await getAllBooks();
                setBooks(data);
            } catch (error: unknown) {
                if (axios.isAxiosError(error)) {
                    const axiosError = error as AxiosError;
                    if (axiosError.response) {
                        // Gérer les erreurs de réponse HTTP
                        throw new Error(`HTTP error: ${axiosError.response.status}`);
                    }}
            }
        };

        fetchBooks();
    }, []);

    const handleDelete = async (id: number) => {
        alert("Are you sure?");
        try {
            await deleteBook(id);
            // Mettre à jour la liste des réservations après la suppression
            const updatedbooks = books.filter(book => book.book_id !== id);
            setBooks(updatedbooks);
        } catch (error) {
            // Gestion des erreurs
        }
    };

    return (
        <div className="card">
            <div className='title'>
                <h1 style={{ color: '#7337d4' }}>Books</h1>
                <Link to="/books/form">
                    <Button style={{ backgroundColor: '#7337d4', borderColor: '#7337d4', marginRight: '0.5rem' }}>
                        <FontAwesomeIcon icon={faPlus} /> New
                    </Button>
                </Link>
            </div>
            <div>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Genre</th>
                            <th>Resume</th>
                            <th>Availability</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr>
                                <td>
                                    {book.book_id}
                                </td>
                                <td>
                                    {book.title}
                                </td>
                                <td>
                                    {book.author}
                                </td>
                                <td>
                                    {book.genre}
                                </td>
                                <td>
                                    {book.resume}
                                </td>
                                <td>
                                    {book.availability}
                                </td>
                                <td>
                                    <Link to={`/books/${book.book_id}/update`}>
                                        <Button style={{ backgroundColor: '#bea3e9', borderColor: '#bea3e9', marginRight: '0.5rem' }} className=" mr-2">
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Button>
                                    </Link>
                                    <Link to={`/books`}>
                                    <Button onClick={() => handleDelete(book.book_id!)} style={{ backgroundColor: '#000000', borderColor: '#000000', marginRight: '0.5rem' }} variant="danger">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default BookList;
