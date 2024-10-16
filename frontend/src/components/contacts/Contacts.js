import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import './contacts.css'; // Estilização adicional

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/contacts');
        const data = await response.json();
        if (data.success) {
          setContacts(data.contacts);
        } else {
          toast.error('Erro ao carregar os contatos.');
        }
      } catch (error) {
        toast.error('Erro ao obter os contatos.');
      }
    };

    fetchContacts();
  }, []);

  // Função para redirecionar para a página de conversa
  const handleContactClick = (contact) => {
    const identity = contact.identity; // Use o identity do contato
    const chatbotId = 'chatbotmatheus'; // Substitua isso pelo ID do seu chatbot
    const subdominio = 'matheus-bernardo-wkvli'; // Substitua isso pelo seu subdomínio

    // Construa a URL da conversa
    const conversationUrl = `https://${subdominio}.blip.ai/application/detail/${chatbotId}/users/${identity}`;

    // Redirecione o usuário para a URL da conversa
    window.location.href = conversationUrl;
  };

  return (
    <div className="contacts-container">
      <h2 className="contacts-title">Lista de Contatos</h2>
      <table className="contacts-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cidade</th>
            <th>Número de Telefone</th>
            <th>Gênero</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <tr
                key={contact.identity} // Use identity como chave única
                onClick={() => handleContactClick(contact)} // Passando o contato inteiro
                className="contact-item"
              >
                <td>{contact.name || 'Nome desconhecido'}</td>
                <td>{contact.city || 'Cidade desconhecida'}</td>
                <td>{contact.phoneNumber || 'Número desconhecido'}</td>
                <td>{contact.gender || 'Gênero desconhecido'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Sem contatos disponíveis</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
