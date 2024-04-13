import React from 'react';
import RouterMain from './routes/RouterMain';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <RouterMain />
         </main>
        <footer>
          <Footer />
        </footer>
      </>
  );
}

export default App;
