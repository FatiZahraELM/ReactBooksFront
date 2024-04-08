import { Button, Form } from 'react-bootstrap';
import '../assets/user.css';
import { useState } from 'react';
import { fetchBookByTitle, fetchUserByName, saveRating } from '../services/ratingsService';
import { useNavigate } from 'react-router-dom';


const RatingForm = () => {
    const [user, setUser] = useState('');
    const [book, setBook] = useState('');
    const [rating, setRating] = useState('');
    const navigate = useNavigate(); // Utilisez useNavigate ici


    const handleSubmit = async (event: any) => {
        event.preventDefault();
    
        try {
            // Fetch the user and book based on the inputs
            // These functions are assumed to be part of your services
            const fetchedUser = await fetchUserByName(user);
            const fetchedBook = await fetchBookByTitle(book);
    
            if (!fetchedUser || !fetchedBook) {
                console.error("User or book not found");
                return;
            }
    
            let ratingForm = {
                user: fetchedUser,
                book: fetchedBook,
                rating:rating
            };
    
            // Now, you're submitting the actual User and Book entities
            const savedRating = await saveRating(ratingForm);
            navigate('/ratings');
            console.log('rating saved:', savedRating);
        } catch (error) {
            console.error('Failed to save rating:', error);
        }
    };
    



    return (
        <div className="card">
            <h1>Add a rating</h1>
            <Form onSubmit={handleSubmit}>
                <div>
                    <Form.Group controlId="user">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                    </Form.Group>
                </div>

                <div>
                    <Form.Group controlId="book">
                        <Form.Label>Book</Form.Label>
                        <Form.Control
                            type="book"
                            placeholder="Enter book"
                            
                            value={book}
                            onChange={(e) => setBook(e.target.value)}
                        />
                    </Form.Group>
                </div>
                <div>
                    <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </Form.Group>
                </div>


                <Button type='submit' style={{ backgroundColor: '#7337d4', borderColor: '#7337d4', marginRight: '0.5rem' }}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default RatingForm;
