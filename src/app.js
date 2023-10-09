// src/app.js
// src/app.js

import express from 'express';
import dotenv from 'dotenv';
import clientesRouter from './routes/clientes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Rota principal da API
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à API da doceria!' });
});

// Rotas relacionadas aos clientes
app.use('/clientes', clientesRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
