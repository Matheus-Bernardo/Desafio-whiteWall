import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ apiKey }),
      });

      if (response.ok) {
        navigate('/'); // Redireciona para a rota raiz após login bem-sucedido
      } else {
        const result = await response.json();
        setError(result.error || 'Erro ao fazer login');
      }
    } catch (err) {
      setError('Erro ao conectar ao servidor');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          API Key:
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            required
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
