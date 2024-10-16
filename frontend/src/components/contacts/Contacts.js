// src/components/ContactList.js
import React, { useEffect, useState } from 'react';
import './contacts.css'; 

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/contacts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar contatos');
        }
        return response.json();
      })
      .then((data) => {
        setContacts(data.contacts);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (error) {
    return <div className="error">Erro: {error}</div>;
  }

  return (
    <div className="contact-list-container">
      <h2>Lista de Contatos</h2>
      <ul className="contact-list">
        {contacts.length > 0 ? (
          contacts.map((contact, index) => (
            <li key={index} className="contact-item">
              <p><strong>ID:</strong> {contact.identity}</p>
              <p><strong>Nome:</strong> {contact.name || 'Sem nome'}</p>
            </li>
          ))
        ) : (
          <li className="no-contacts">Nenhum contato encontrado</li>
        )}
      </ul>
    </div>
  );
}

export default ContactList;
