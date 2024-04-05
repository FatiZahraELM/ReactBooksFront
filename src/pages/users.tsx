
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header'

import Footer from '../components/footer';
import UsersList from '../components/userList';

const Users = () => {
    
    return (
      <>
        <Header />
        <UsersList />
        <footer><Footer /></footer>
  
      </>
    );
  }
  export default Users