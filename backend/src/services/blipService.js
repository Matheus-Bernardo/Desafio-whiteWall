const BlipSdk = require('blip-sdk');
const WebSocketTransport = require('lime-transport-websocket');

// Variáveis de ambiente para o identificador do bot e chave de acesso
const IDENTIFIER = process.env.BLIP_IDENTIFIER ;
const ACCESS_KEY = process.env.BLIP_ACCESS_KEY ;

// Função para conectar ao Blip
const connectToBlip = async () => {
    try {
        // Criação do cliente do bot
        let client = new BlipSdk.ClientBuilder()
            .withIdentifier(IDENTIFIER)
            .withAccessKey(ACCESS_KEY)
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

module.exports = { connectToBlip }; 
