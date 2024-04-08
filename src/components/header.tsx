import { Link } from 'react-router-dom'
import '../assets/header.css'

function Header() {

  return (
    <>
      <div className='headerComponent'>
        <div className='left'>
          <h5 style={{ color: '#7337d4' }}>Biblio</h5>

          <Link to="/">

            <a className='headerButton'>Home</a>
          </Link>
          <Link to="/users">
            <a className='headerButton'>Users</a>
          </Link>
          <Link to="/books">
            <a className='headerButton'>Books</a>
          </Link>
        </div>
        <div>
          <Link to="/ratings">

            <a className='headerButton'>Ratings</a>
          </Link>

         
          <Link to="/wishLists">

            <a className='headerButton'>wishList</a>
          </Link>
          <Link to="/bookLoans">

            <a className='headerButton'>bookLoans</a>
          </Link>
        </div>
      </div>

    </>
  )
}

export default Header
