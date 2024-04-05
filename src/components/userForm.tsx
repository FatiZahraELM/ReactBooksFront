import { Button, Form } from 'react-bootstrap';
import '../assets/user.css';
import { useState } from 'react';
import { saveUser } from '../services/UsersService';
import { useNavigate } from 'react-router-dom';


const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); // Utilisez useNavigate ici


    // Function to handle the form submission
    const handleSubmit = async (event:any) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Adjusting to match the user interface
        let user = {
            name: name,
            email: email,
        };

        try {
            const savedUser = await saveUser(user); // Attempt to save the user
            navigate('/users'); // Redirigez vers la page de tableau des users

            console.log('user saved:', savedUser);
            // Optionally reset form fields here
        } catch (error) {
            console.error('Failed to save user:', error);
        }
    };

    return (
        <div className="card">
            <h1>Add a User</h1>
            <Form onSubmit={handleSubmit}>
                <div>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                </div>

                <div>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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

export default UserForm;
