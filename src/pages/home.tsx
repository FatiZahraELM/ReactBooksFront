
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header'

import Footer from '../components/footer';

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Home = () => {
    return (
        <>
            <Header />
            <div className='card'>
            <h1 style={{ color: '#7337d4' }}>Users</h1>
            <Link to="/users">

                <Button style={{ backgroundColor: '#7337d4', borderColor: '#7337d4', marginRight: '0.5rem' }} className=" mr-2">
                    See All
                </Button>
            </Link>
            </div>
            <div className='card'>
            <h1 style={{ color: '#7337d4' }}>Books</h1>
            <Link to="/books">

                <Button style={{ backgroundColor: '#7337d4', borderColor: '#7337d4', marginRight: '0.5rem' }} className=" mr-2">
                    See All
                </Button>
            </Link>
            </div>
            <footer><Footer /></footer>

        </>
    );
}
export default Home
