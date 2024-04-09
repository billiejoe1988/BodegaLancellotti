import React from 'react';
import RouterMain from './routes/RouterMain';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import visitas from './components/visitas';

function App() {
  return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <RouterMain />
          <visitas />            

          </main>
        <footer className='pt-5'>
          <Footer />
        </footer>
      </>
  );
}

export default App;
