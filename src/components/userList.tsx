
import { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { faEdit, faInfoCircle, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { getAllUsers, deleteUser} from '../services/UsersService';
import { User } from '../models/users';



const UsersList = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getAllUsers();
                setUsers(data);
            } catch (error) {
                console.log(error);    
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id: number) => {
        alert("Are you sure?");

        try {
            await deleteUser(id);
            const updatedUsers = users.filter(user => user.user_id !== id);
            setUsers(updatedUsers);
        } catch (error) {
        }
    };

    return (
        <div className="card">
            <div className='title'>
                <h1 style={{ color: '#7337d4' }}>Users</h1>
                <Link to="/users/form">
                    <Button style={{ backgroundColor: '#7337d4', borderColor: '#7337d4', marginRight: '0.5rem' }}>
                        <FontAwesomeIcon icon={faPlus} /> New
                    </Button>
                </Link>
            </div>

            <div>
                <Table striped bordered hover >
                    <thead>
                        <tr><th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr>
                                <td>
                            {user.user_id}
                            </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                               
                                <td>
                                <Link to={`/users/${user.user_id}/details`}>
                                        <Button style={{ backgroundColor: '#7337d4', borderColor: '#7337d4', marginRight: '0.5rem' }} className=" mr-2">
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        </Button>
                                    </Link>

                                    <Link to={`/users/${user.user_id}/update`}>
                                        <Button style={{ backgroundColor: '#bea3e9', borderColor: '#bea3e9', marginRight: '0.5rem' }} className=" mr-2">
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Button>
                                    </Link>
                                    <Link to={`/users`}>
                                    <Button onClick={() => handleDelete(user.user_id!)} style={{ backgroundColor: '#000000', borderColor: '#000000', marginRight: '0.5rem' }} variant="danger">
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
    );
};

export default UsersList;
