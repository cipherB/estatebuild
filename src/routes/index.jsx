import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Footer from '../components/Footer';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Faq from '../pages/Faq';
import Loan from '../pages/Loan';
import Invest from '../pages/Invest';

const index = () => {
  return (
    <div>
      <div className="mt-[5.5rem]">
        <Navbar />
      </div>
      <div className='' >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/loan-application" element={<Loan />} /> */}
          {/* <Route path="/invest-application" element={<Invest />} /> */}
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default index