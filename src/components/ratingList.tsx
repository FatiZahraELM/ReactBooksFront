import { Table, Button } from 'react-bootstrap';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/user.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllRatings } from '../services/ratingsService';
import axios, { AxiosError } from 'axios';
import { Rating } from '../models/rating';




const RatingList = () => {
    const [ratings, setRatings] = useState<Rating[]>([]);
    useEffect(() => {
        const fetchRatings = async () => {
            try {
                const data = await getAllRatings();
                setRatings(data);
            } catch (error: unknown) {
                if (axios.isAxiosError(error)) {
                    const axiosError = error as AxiosError;
                    if (axiosError.response) {
                        // Gérer les erreurs de réponse HTTP
                        throw new Error(`HTTP error: ${axiosError.response.status}`);
                    }}
            }
        };

        fetchRatings();
    }, []);

    


    return (
        <div className="card">
            <div className='title'>
                <h1 style={{ color: '#7337d4' }}>ratings</h1>
                <Link to="/ratings/form">
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
                            <th>USER</th>
                            <th>BOOK</th>
                            <th>RAITING</th>
                           
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ratings.map((rating) => (
                            <tr>
                                <td>
                                    {rating.rating_id}
                                </td>
                                <td>
                                {rating.user.name}
                                </td>
                                <td>
                                {rating.book.title}
                                </td>
                                <td>
                                {rating.rating}
                                </td>
                               
                                <td>
                                    <Link to={`/ratings/${rating.rating_id}/update`}>
                                        <Button style={{ backgroundColor: '#bea3e9', borderColor: '#bea3e9', marginRight: '0.5rem' }} className=" mr-2">
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Button>
                                    </Link>
                                    <Link to={`/ratings`}>
                                    <Button  style={{ backgroundColor: '#000000', borderColor: '#000000', marginRight: '0.5rem' }} variant="danger">
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

export default RatingList;

