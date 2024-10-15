import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/components/login';  // Importe o componente de Login
//import Home from './components/Home';    // Importe o componente Home (será a lista de contatos)

// Defina as rotas dentro do Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />   {/* Rota de Login */}
        
        {/* Adicione mais rotas conforme necessário */}
      </Routes>
    </Router>
  );
}

export default App;
