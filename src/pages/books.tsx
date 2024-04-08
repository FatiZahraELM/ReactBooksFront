
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header'

import Footer from '../components/footer';

import BookList from '../components/bookList';
const Books = () => {
    return (
      <>
        <Header />
        <BookList />
        <footer><Footer /></footer>
  
      </>
    );
  }
  export default Books

  