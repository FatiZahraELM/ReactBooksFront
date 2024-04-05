
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header'

import Footer from '../components/footer';

import RatingList from '../components/ratingList';
const Ratings = () => {
    return (
      <>
        <Header />
        <RatingList/>
        <footer><Footer /></footer>
  
      </>
    );
  }
  export default Ratings