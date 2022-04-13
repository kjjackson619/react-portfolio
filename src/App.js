import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import AppNav from './components/Nav';
import ContactForm from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {

  return (

    <Router>
      <>
        <AppNav />
        <Routes>

          <Route exact path='/portfolio' element={<Portfolio />} />

          <Route exact path='/' element={<About />} />

          <Route exact path='/about' element={<About />} />

          <Route exact path='/resume' element={<Resume />} />

          <Route exact path='/contact' element={<ContactForm />} />

        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
