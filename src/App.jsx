import { BrowserRouter, Route, Routes } from 'react-router';
import UserProvider from '@context/user';
import Books from '@pages/Books';
import Book from '@pages/Book';
import User from '@pages/User';
import PrivateRoute from './routes/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path='/' element={<Books />} />
            <Route path='/book' element={<Book />} />
            <Route path='/user' element={<User />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

