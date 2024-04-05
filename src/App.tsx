
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Users from './pages/users'
import Books from './pages/books'
import UserForm from './components/userForm'
import BookForm from './components/bookForm'
import UpdateBook from './components/updateBook'
import UpdateUser from './components/updateUser'
import Ratings from './pages/ratings'
import { UserPage } from './pages/userPage'
import WishsList from './components/wishList'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route  path="/users" element={<Users/>}></Route>
      <Route  path="/books" element={<Books/>}></Route>
      <Route  path="/ratings" element={<Ratings/>}></Route>
      <Route path="/users/form" element={<UserForm />} />
      <Route path="/books/form" element={<BookForm />} />
      <Route path="/books/:id/update" element={<UpdateBook />} />
      <Route path="/users/:id/update" element={<UpdateUser />} />
      <Route path="/users/:id/details" element={<UserPage />} />
      <Route path="/users/:id/wishlist" element={<WishsList />} />


    </Routes>
  </BrowserRouter>
  )
}

export default App
