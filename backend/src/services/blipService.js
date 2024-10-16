const BlipSdk = require('blip-sdk');
const WebSocketTransport = require('lime-transport-websocket');
const Lime = require('lime-js');
// Variáveis de ambiente para o identificador do bot e chave de acesso
const IDENTIFIER = process.env.BLIP_IDENTIFIER || 'chatbotmatheus';
const ACCESS_KEY = process.env.BLIP_ACCESS_KEY || 'YWY3cm1kRlNBMHZvS2E1Vk5DM2w=';

let client; // Variável para armazenar o cliente Blip

// Função para conectar ao Blip
const connectToBlip = async (apiKey) => {

    try {
        // Criação do cliente do bot
        client = new BlipSdk.ClientBuilder()
            .withIdentifier(IDENTIFIER)
            .withAccessKey(apiKey)
            .withTransportFactory(() => new WebSocketTransport())
            .build();

        // Conectar ao Blip
        await client.connect();
        console.log('Conectado ao Blip com sucesso!');

        // Ouvir mensagens recebidas 
        client.addMessageReceiver(true, (message) => {
            console.log('Mensagem recebida:', message);
        });

        return client;
        
    } catch (error) {
        console.error('Erro ao conectar ao Blip:', error);
        throw error; // Lança o erro para que o código que chama essa função possa tratá-lo
    }

};
const getBlipClient = () => {
    return client; // Retorna o cliente Blip conectado
};

module.exports = { connectToBlip, getBlipClient}; 
