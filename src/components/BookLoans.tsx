
import { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { faEdit, faInfoCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';
import { getAllBookLoans} from '../services/BookLoansService';
import { BookLoan } from '../models/bookLoan';



const BookLoans = () => {
    const { id } = useParams();
    const [BookLoanss, setBookLoans] = useState<BookLoan[]>([]);

    useEffect(() => {
        const fetchBookLoans = async () => {
            try {
                const data = await getAllBookLoans();
                setBookLoans(data);
            } catch (error) {
                console.log(error);    
            }
        };

        fetchBookLoans();
    }, []);

    

    return (
        <div className="card">
            <div className='title'>
                <h1 style={{ color: '#7337d4' }}>BookLoanss</h1>
                <Link to="/BookLoans/form">
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
                    {BookLoanss.map((BookLoans) => (
    <tr key={BookLoans.user.name}>
        <td>
            {BookLoans.book && BookLoans.book.title}
        </td>
        <td>
            {BookLoans.user && BookLoans.user.name}
        </td>
        <td>
            <Link to={`/bookLoans/${id}/details`}>
                <Button style={{ backgroundColor: '#7337d4', borderColor: '#7337d4', marginRight: '0.5rem' }} className=" mr-2">
                    <FontAwesomeIcon icon={faInfoCircle} />
                </Button>
            </Link>
            <Link to={`/bookLoans/${id}/update`}>
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

export default BookLoans;
