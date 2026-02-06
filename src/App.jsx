import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './pages/Home';
import Shop from './pages/Shop';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="/contactus" element={<ContactUs/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
