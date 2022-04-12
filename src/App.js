import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Nav from './components/Nav';
import ContactForm from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

  return (

    <Router>
      <>
        <Nav />
        <Routes>

          <Route exact path='/' component={Portfolio} />

          <Route exact path='/' component={About} />

          <Route exact path='/' component={Resume} />

          <Route exact path='/' component={ContactForm} />

        </Routes>
      </>
    </Router>
  );
}

export default App;
