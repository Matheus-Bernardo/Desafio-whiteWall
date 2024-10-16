import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/components/login'; 
import Contacts from '../src/components/Contacts';


// Defina as rotas dentro do Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router>
  );
}

export default App;
