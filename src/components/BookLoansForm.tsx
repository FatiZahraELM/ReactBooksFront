import { Button, Form } from 'react-bootstrap';
import '../assets/user.css';
import { useState } from 'react';
import { fetchBookByTitle, fetchUserByName, saveBookLoans } from '../services/BookLoansService';
import { useNavigate } from 'react-router-dom';


const BookLoansForm = () => {
    const [user, setUser] = useState('');
    const [book, setBook] = useState('');
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
    
            let bookLoan = {
                user: fetchedUser,
                book: fetchedBook,
            };
    
            const savedWishList = await saveBookLoans(bookLoan);
            navigate('/bookLoans');
            console.log('BookLoans saved:', savedWishList);
        } catch (error) {
            console.error('Failed to save BookLoans:', error);
        }
    };
    



    return (
        <div className="card">
            <h1>Add a wishlist</h1>
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


                <Button type='submit' style={{ backgroundColor: '#7337d4', borderColor: '#7337d4', marginRight: '0.5rem' }}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default BookLoansForm;
