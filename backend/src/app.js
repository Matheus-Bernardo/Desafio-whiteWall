const fs = require('fs');
const path = require('path');
const express = require('express');
const authRoutes = require('./routes/auth'); 
const swaggerUi = require('swagger-ui-express');

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, 'documentacao', 'swagger.json'), 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Usar as rotas de autenticação
app.use('/api', authRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
