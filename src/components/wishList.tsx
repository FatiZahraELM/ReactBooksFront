
import { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { faEdit, faInfoCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';
import { getAllwishLists} from '../services/UsersService';
import { WishList } from '../models/wishList';



const WishsList = () => {
    const { id } = useParams();
    const [wishLists, setWishLists] = useState<WishList[]>([]);

    useEffect(() => {
        const fetchwishLists = async () => {
            try {
                const data = await getAllwishLists(parseInt(id!));
                setWishLists(data);
            } catch (error) {
                console.log(error);    
            }
        };

        fetchwishLists();
    }, []);

    

    return (
        <div className="card">
            <div className='title'>
                <h1 style={{ color: '#7337d4' }}>wishLists</h1>
                <Link to="/wishLists/form">
                    <Button style={{ backgroundColor: '#7337d4', borderColor: '#7337d4', marginRight: '0.5rem' }}>
                        <FontAwesomeIcon icon={faPlus} /> New
                    </Button>
                </Link>
            </div>

            <div>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>Book</th>
                            <th>User</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {wishLists.map((wishList) => (
    <tr key={wishList.user.user_id}>
        <td>
            {wishList.book && wishList.book.title}
        </td>
        <td>
            {wishList.user && wishList.user.name}
        </td>
        <td>
            <Link to={`/wishLists/${id}/details`}>
                <Button style={{ backgroundColor: '#7337d4', borderColor: '#7337d4', marginRight: '0.5rem' }} className=" mr-2">
                    <FontAwesomeIcon icon={faInfoCircle} />
                </Button>
            </Link>
            <Link to={`/wishLists/${id}/update`}>
                <Button style={{ backgroundColor: '#bea3e9', borderColor: '#bea3e9', marginRight: '0.5rem' }} className=" mr-2">
                    <FontAwesomeIcon icon={faEdit} />
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

export default WishsList;
