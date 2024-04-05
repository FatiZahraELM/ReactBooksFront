import { Link } from 'react-router-dom'
import '../assets/header.css'

function Header() {

  return (
    <>
      <div className='headerComponent'>
        <div className='left'>
          <h5 style={{ color: '#7337d4' }}>Biblio</h5>

          <select className='dropdown' name="menu" id="menu" >
            <option value="" disabled selected>Menu</option>
            <option value="value 1">value 1</option>
            <option value="value 2">value 2</option>
            <option value="value 3">value 3</option>
          </select>
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

          <Link to="/">

            <a className='headerButton'>Home</a>
          </Link>
        </div>
      </div>

    </>
  )
}

export default Header
