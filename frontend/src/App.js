import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/components/login/login'; 
import Contacts from '../src/components/contacts/Contacts';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
