import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import Layout from './template/Layout';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout><Home/></Layout>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>
  </BrowserRouter>


  );
}

export default App;
