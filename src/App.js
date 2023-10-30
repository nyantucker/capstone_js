import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import Layout from './template/Layout';
import DetailMovie from './page/DetailMovie/DetailMovie';
import Booking from './page/DetailMovie/ShowTime/Booking/Booking';
import Register from './page/Register/Register';
import UserInfo from './page/UserInfo/UserInfo';
import PrivateRoute from './template/PrivateRoute';
import AdminLayout from './template/AdminLayout';
import MoviePage from './page/Admin/MoviePage/MoviePage';
import Admin from './page/Admin/Admin';
import UserPage from './page/Admin/UserPage/UserPage';
import AddMovie from './page/Admin/MoviePage/AddMovie/AddMovie';
import AddUser from './page/Admin/UserPage/AddUser/AddUser';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout><Home/></Layout>}/>
    <Route path="/movie/:id" element={<Layout><DetailMovie/></Layout>}/>
    <Route path="/movie/lich-chieu/:maLichChieu" element={<Layout><Booking/></Layout>}/>
    <Route path="/thongtincanhan" element={<Layout><UserInfo/></Layout>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="" element={<PrivateRoute><AdminLayout/></PrivateRoute>}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/user" element={<UserPage/>} />
            <Route path="/admin/user/add" element={<AddUser/>} />
            <Route path="/admin/movie" element={<MoviePage />} />
            <Route path="/admin/movie/add" element={<AddMovie />} />
    </Route>
  </Routes>
  </BrowserRouter>


  );
}

export default App;
