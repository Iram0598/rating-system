import React from 'react';
import { ReactDOM } from 'react';
import Navigation from './components/Navigation';
import Rescard from './components/Rescard';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Login from './components/Login';
import './LoginStyle.css'
import Createform from './components/Createform';
import Newlyadded from './components/Newlyadded';
import Rating from './components/Rating';
import RateCard from './components/RateCard.Js';

import {Route, Link,  Routes, BrowserRouter, useNavigate} from 'react-router-dom'



function App() {
  return (
    <div>
       <Navigation/>
      
      <Routes>
      <Route path="/" element={<Rescard />} />
      <Route path="/create" element={<Createform />} />
      <Route path="/new" element={<Newlyadded />} />
      <Route path="/login" element={<Login />} />
      <Route path="/rate" element={<RateCard />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
