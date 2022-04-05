import React, { useState } from 'react';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {

  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'Display of all my projects.'
    },
    {
      name: 'resume',
      description: 'Resume of all my achievements, skills, and employment history.'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      >

      </Nav>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
