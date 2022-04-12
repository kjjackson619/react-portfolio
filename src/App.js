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

          <Route exact path='/portfolio' component={Portfolio} />

          <Route exact path='/about' component={About} />

          <Route exact path='/resume' component={Resume} />

          <Route exact path='/contact' component={ContactForm} />

        </Routes>
      </>
    </Router>
  );
}

export default App;
