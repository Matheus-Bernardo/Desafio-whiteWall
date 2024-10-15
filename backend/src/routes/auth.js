const express = require('express');
const { connectToBlip } = require('../services/blipService'); 

const router = express.Router();

router.post('/login', async (req, res) => {
    const { apiKey } = req.body;

    if (!apiKey) {
        return res.status(400).json({ error: 'API Key é obrigatória' });
    }

    try {
        // Defina a chave de acesso como uma variável global ou gerencie com sessão
        process.env.BLIP_ACCESS_KEY = apiKey;

        // Chame a função para conectar ao Blip com a nova chave
        await connectToBlip();

        res.status(200).json({ message: 'Autenticado com sucesso no Blip!' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao autenticar no Blip', details: err });
    }
});

module.exports = router; // Alteração para exportação no padrão CommonJS
