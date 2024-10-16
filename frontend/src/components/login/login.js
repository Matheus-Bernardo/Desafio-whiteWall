import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

function Login() {
  const [apiKey, setApiKey] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ apiKey }),
      });

      if (response.ok) {
        toast.success('Login realizado com sucesso!');
        setTimeout(() => navigate('/'), 1000); // Redireciona após 1 segundo
      } else {
        toast.error('Erro no login. Verifique suas credenciais.');
      }
    } catch (error) {
      toast.error('Erro ao autenticar. Tente novamente.'); // Mostra toast em caso de exceção
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="apiKey">API Key:</label>
        <input
          type="text"
          id="apiKey"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">Entrar</button>
      </form>
      <ToastContainer /> {/* Componente para exibir os toasts */}
    </div>
  );
}

export default Login;
