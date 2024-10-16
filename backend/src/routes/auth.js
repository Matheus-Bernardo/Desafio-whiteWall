const express = require('express');
const Lime = require('lime-js'); 
const { connectToBlip,getBlipClient } = require('../services/blipService'); 

const router = express.Router();

router.post('/login', async (req, res) => {
    const { apiKey } = req.body;

    if (!apiKey) {
        return res.status(400).json({ error: 'API Key é obrigatória' });
    }

    try {
           await connectToBlip(apiKey);
        
        res.status(200).json({ message: 'Autenticado com sucesso no Blip!' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao autenticar no Blip', details: err });
    }
});


router.get('/contacts', async (req, res) => {
  const client = getBlipClient(); // Acesso ao cliente Blip autenticado
  console.log(getBlipClient());

  if (!client) {
      return res.status(500).json({ error: 'Cliente Blip não conectado' });
  }

  try {
      const response = await client.sendCommand({
          id: Lime.Guid(), // Gera um ID único para o comando
          method: 'get',
          uri: '/contacts'
      });

      res.json({
          success: true,
          contacts: response.resource.items // Acessa a lista de contatos
      });
  } catch (error) {
      console.error('Erro ao obter contatos:', error);
      res.status(500).json({ success: false, message: 'Erro ao obter contatos.' });
  }
});
router.get('/contact/:id', async (req, res) => {
    const contactId = req.params.id;
    const client = getBlipClient(); // Acesso ao cliente Blip autenticado

    if (!client) {
        return res.status(500).json({ error: 'Cliente Blip não conectado' });
    }

    try {
        const response = await client.sendCommand({
            id: Lime.Guid(),
            method: 'get',
            uri: `/messages/${contactId}` // Endpoint para buscar mensagens de um contato
        });

        res.json({
            success: true,
            messages: response.resource.items // Retorna as mensagens trocadas
        });
    } catch (error) {
        console.error('Erro ao obter mensagens do contato:', error);
        res.status(500).json({ success: false, message: 'Erro ao obter mensagens do contato.' });
    }
});
module.exports = router;
