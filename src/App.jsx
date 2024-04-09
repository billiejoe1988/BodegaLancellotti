import React from 'react';
import RouterMain from './routes/RouterMain';
import Contacto from './components/contacto';

function App() {
  return (
      <>
        <main>
          <RouterMain />
        </main>
        <footer className='pt-5'>
          <Contacto />
        </footer>
      </>
  );
}

export default App;
