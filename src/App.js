import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import All from './Components/Index';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<All />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;