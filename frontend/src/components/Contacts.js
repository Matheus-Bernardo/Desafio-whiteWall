import React, { useEffect, useState } from 'react';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Busca os contatos do backend
    fetch('http://localhost:3000/api/contacts')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setContacts(data.contacts);
        } else {
          setError('Falha ao carregar contatos');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao carregar contatos:', error);
        setError('Erro ao carregar contatos');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Lista de Contatos</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.identity}>
            {contact.name || 'Sem Nome'} - {contact.identity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
