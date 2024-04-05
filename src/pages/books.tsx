
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header'

import Footer from '../components/footer';

import RoomList from '../components/bookList';
const Books = () => {
    return (
      <>
        <Header />
        <RoomList />
        <footer><Footer /></footer>
  
      </>
    );
  }
  export default Books