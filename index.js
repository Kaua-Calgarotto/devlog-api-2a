//npm init -y   //inicia um novo projeto node
//npm install express  //instala a dependênci do Express
//Configura type:module no package.json 
//npm install nodemon --save-dev
//Configura o nodemon no packge.json
// "scripts": {
//     "start": "node index.js",
//     "dev": "nodemon index.js"
//   },
//Criar arquivo index.js
//Configurar servidor express
//executa a aplicação com npm run dev

import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import projectRoutes from './routes/projectRoutes.js'
const app = express();

// ── Middlewares globais ─────────────────────────────────────
app.use(express.json()); //Para o express lidar com json
app.use(morgan('dev'));

// ── Rotas ────────────────────────────────────────────────────
app.use('/api/v1/projects', projectRoutes);

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    env: process.env.NODE_ENV,
    version: '1.0.0'
  });
});

// ── Middleware de 404 ────────────────────────────────────────
app.use((req, res, next) => {
  res.status(404).json({
    error: 'Rota não encontrada',
    path: req.path,
    method: req.method
  });
});

// ── Error handler (4 params — SEMPRE ÚLTIMO) ─────────────────
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(err.statusCode || 500).json({
    error: err.message || 'Erro interno do servidor'
  });
});

const PORT = process.env.PORT || 3030; //fallback para porta 3030
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Ambiente: ${process.env.NODE_ENV || 'development'}`);
});