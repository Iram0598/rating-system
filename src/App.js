import React from 'react';
import Navigation from './components/Navigation';
import Rescard from './components/Rescard';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



function App() {
  return (
    <div>
       <Navigation />
       <Rescard />
       <Footer />
    </div>
  );
}

export default App;
