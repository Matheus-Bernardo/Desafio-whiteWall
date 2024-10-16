import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './conversation.css';
import { toast } from 'react-toastify';

const Conversation = () => {
  const { id } = useParams(); // Pega o ID do contato da URL
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/contacts/${id}/messages`);
        const data = await response.json();
        if (data.success) {
          setMessages(data.messages);
        } else {
          toast.error('Erro ao carregar as mensagens.');
        }
      } catch (error) {
        toast.error('Erro ao obter as mensagens.');
      }
    };

    fetchMessages();
  }, [id]);

  return (
    <div className="conversation-container">
      <h2>Conversa com o contato {id}</h2>
      <div className="messages-list">
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div key={index} className={`message ${message.direction}`}>
              <span className="message-content">{message.content}</span>
            </div>
          ))
        ) : (
          <p>Nenhuma mensagem disponível</p>
        )}
      </div>
    </div>
  );
};

export default Conversation;
