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
  </Routes>
  </BrowserRouter>


  );
}

export default App;
