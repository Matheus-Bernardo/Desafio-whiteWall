const express = require('express');
const authRoutes = require('./routes/auth'); 
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

// Usar as rotas de autenticação
app.use('/api', authRoutes);
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
