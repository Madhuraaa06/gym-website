import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer'; // 
import Gallery from './Components/Gallery';
import About from './Components/About';
import Contact from './Components/Contact';
import Pricing from './Components/Pricing';
import Home from './Components/Home';
import Carousel from './Components/Carousel';
import Navbar from './Components/Navbar';




function App() {
  return (
    <div>

    
<BrowserRouter>
        <Navbar />
        
        <Routes>
        <Route
    path="/"
    element={
      <>
        <Carousel />
        <Home />
      </>
    }
  />

          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Contact" element={<Contact />} />
          
        </Routes>

        <Footer/>
        
      </BrowserRouter>




      

    

    </div>
  );
}

export default App;
