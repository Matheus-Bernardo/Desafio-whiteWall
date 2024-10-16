# Chatbot Contacts Manager

Um aplicativo simples para gerenciar contatos de um chatbot utilizando a API do Blip. Este projeto permite autenticar-se com a API do Blip, obter uma lista de contatos e abrir um chat individual com um contato específico.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Endpoints da API](#endpoints-da-api)
- [Feito por](#feito-por)
-

## Tecnologias Utilizadas

- **Frontend:**
  - React
  - React Router
  - Axios (opcional, caso utilize para chamadas de API)
  - Toastify para notificações

- **Backend:**
  - Node.js
  - Express
  - Lime JS para interagir com a API do Blip
  - Middleware de autenticação (caso tenha)


1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Matheus-Bernardo/Desafio-whiteWall


## Instalação

Para instalar o projeto, siga estas etapas:

 no caminho ./backend  utilize do comando npm Install para instalar as dependencias
 posteriormente rode o servidor através do comando 'node app.js' dentro de .backend/src


Para instalar o projeto, siga estas etapas:

 no caminho ./frontend  utilize do comando npm Install para instalar as dependencias
 posteriormente rode o servidor através do comando 'npm start' dentro de .frontend/src

Deverá ser rodado o servidor do backend primeiro, para evitar conflitos entre portas. 


## Configuração

  *Variaveis de ambiente respectivas

## uso

  * A ferramenta blip é muito utilizada para responder e receber mensagens de forma automática, podendo se integrar através de suas apis a diversos meios de comunicação, como por exemplo whatsap, instagran, messenger, telegran e dentre outros.

## endpoints-da-api
  * [Podem ser acessados através da url do Swagger](http://localhost:3000/api-docs/#/default/post_login) uma vez que o servidor esteja rodando

## rotas do frontend
  * O processo se inicia na página de contatos dado por : http://localhost:3001, vale lembrar que para isso terá que antes fazer login na rota abaixo.
  http://localhost:3001/login, após isso, o fluxo será se iniciado normalmente.


## feito-por
 * Matheus Henrique Lourenço Bernardo
 * Aluno do Instituto Nacional de Telecomunicações - Inatel
 * Linkedin: [Matheus Bernardo](https://www.linkedin.com/in/matheus-bernardo-b20796196/)

