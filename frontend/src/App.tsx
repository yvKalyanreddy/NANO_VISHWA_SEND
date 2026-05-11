import { Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar/Navbar'
import Home from './pages/home/Home'
import Testimonial from './pages/testimonial/Testimonial'
import Footer from './pages/Footer/Footer'
import Subscription from './pages/subscription/Subscription'
import './App.css'
import Menu from "./pages/menu/menu"
import OurStory from "./pages/ourstory/Ourstory";
import AboutUs from "./pages/aboutus/aboutus";
import Enquiry2 from "./pages/enquiry2/Enquiry2";
import LoginPage from "./pages/signin/signin";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/enquiry" element={<Enquiry2 />} />
        <Route path="/signin" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
