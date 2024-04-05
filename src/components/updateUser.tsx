import  { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserDetails, updateUser } from '../services/UsersService'; 

const UpdateUser = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const loadUserDetails = async () => {
        try {
            const details = await getUserDetails(parseInt(id!));
            if (details) {
                setName(details.name); // Assurez-vous du format
                setEmail(details.email); // Assurez-vous du format
            }
        } catch (error) {
            console.error('Failed to load user details:', error);
            // Gérer l'erreur de chargement ici
        }
    };

    useEffect(() => {
        loadUserDetails();
    }, [id]); // Exécutez useEffect quand `id` change


    const handleSubmit = async (event:any) => {
        event.preventDefault();
        const userToUpdate = {
            userId:parseInt(id!),
            name:name,
            email: email
        };

        try {
            await updateUser( userToUpdate);
            console.log('user updated successfully');
            navigate('/users'); // Redirige vers la liste des réservations après la mise à jour
        } catch (error) {
            console.error('Failed to update user:', error);
            // Gérer l'erreur ici (par exemple, afficher un message d'erreur à l'utilisateur)
        }
    };

    return (
        <div className="card">
            <h1>Update user {id}</h1>
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

export default UpdateUser;
