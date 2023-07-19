
import './App.css';
import Navbar from './component/Navbar';
import Booking from './component/Booking';
import Login from './component/Login';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import Confirmed from './component/Confirmed';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
       <Navbar/>
        <Routes>
        <Route path="/" exact element={<Homepage/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/booking"element={<Booking/>}></Route>
      <Route path="/Confirmed"element={<Confirmed/>}></Route>
    </Routes>
        <Footer/>
    </>
    );
}

export default App;
