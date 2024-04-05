
import { Button, Form } from 'react-bootstrap';
import '../assets/user.css';
import { useState } from 'react';
import { saveBook } from '../services/booksService';
import { useNavigate } from 'react-router-dom';

const BookForm = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [availability, setAvailability] = useState('');
    const [author, setAuthor] = useState('');
    const [resume, setResume] = useState('');

    // Function to handle the form submission
    const handleSubmit = async (event: any) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Adjusting to match the Reservation interface
        const book = {
            title:title,
            genre:genre,
            resume:resume,
            author:author,
            availability: availability // Assurez-vous que cela correspond à votre modèle de données
        };

        try {
            const savedbook = await saveBook(book); // Attempt to save the reservation
            navigate('/books');
            console.log('book saved:', savedbook);
            // Optionally reset form fields here
        } catch (error) {
            console.error('Failed to save book:', error);
        }
    };

    return (
        <div className="card">
            <h1>Add a book</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>book title</Form.Label>
                    <Form.Control type="text" 
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter a title" />
                </Form.Group>

                <Form.Group controlId="genre">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="text"
                           onChange={(e) => setGenre(e.target.value)}
                        placeholder="Enter gerne" />
                </Form.Group>
                <Form.Group controlId="resume">
                    <Form.Label>Resume</Form.Label>
                    <Form.Control type="text" 
                               onChange={(e) => setResume(e.target.value)} placeholder="Enter resume" />

                </Form.Group>
                <Form.Group controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" 
                               onChange={(e) => setAuthor(e.target.value)} placeholder="Enter author" />

                </Form.Group>

                <Form.Group controlId="availability">
    <Form.Label>Availability</Form.Label>
    <Form.Control as="select"  onChange={(e) => setAvailability(e.target.value)}>
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


export default BookForm;
