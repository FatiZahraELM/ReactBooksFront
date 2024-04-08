
import { Button, Form } from 'react-bootstrap';
import '../assets/user.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBookDetails, updateBook } from '../services/booksService';
const UpdateBook = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [availability, setAvailability] = useState('');
    const [author, setAuthor] = useState('');
    const [resume, setResume] = useState('');

    const loadBookDetails = async () => {
        try {
            const details = await getBookDetails(parseInt(id!));
            if (details) {
                setTitle(details.title);
                setGenre(details.genre);
                setAvailability(details.availability);
                setAuthor(details.author);
                setResume(details.resume)
            }
        } catch (error) {
            console.error('Failed to load book details:', error);
            // Gérer l'erreur de chargement ici
        }
    };

    useEffect(() => {
        loadBookDetails();
    }, [id]); // Exécutez useEffect quand `id` change


    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const bookToUpdate = {
            book_id: parseInt(id!),
            title: title,
            genre: genre,
            resume: resume,
            author: author,
            availability: availability 
        };

        try {
            await updateBook(bookToUpdate);
            console.log('book updated successfully');
            navigate('/books'); 
        } catch (error) {
            console.error('Failed to update book:', error);
            
        }
    };
    return (
        <div className="card">
            <h1>Update book {id}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>book title</Form.Label>
                    <Form.Control type="text" value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter a title" />
                </Form.Group>

                <Form.Group controlId="genre">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="text"
                        value={genre} onChange={(e) => setGenre(e.target.value)}
                        placeholder="Enter gerne" />
                </Form.Group>
                <Form.Group controlId="resume">
                    <Form.Label>Resume</Form.Label>
                    <Form.Control type="text" value={resume}
                        onChange={(e) => setResume(e.target.value)} placeholder="Enter resume" />

                </Form.Group>
                <Form.Group controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" value={author}
                        onChange={(e) => setAuthor(e.target.value)} placeholder="Enter author" />

                </Form.Group>

                <Form.Group controlId="availability">
                    <Form.Label>Availability</Form.Label>
                    <Form.Control as="select" value={availability} onChange={(e) => setAvailability(e.target.value)}>
                        <option value="available">Available</option>
                        <option value="unavailable">Unavailable</option>
                    </Form.Control>
                </Form.Group>

                <Button type='submit' style={{ backgroundColor: '#7337d4', borderColor: '#7337d4', marginRight: '0.5rem' }}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};


export default UpdateBook;
