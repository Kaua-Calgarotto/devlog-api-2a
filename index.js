// PRIMEIRA LINHA - antes de tudo!
import 'dotenv/config';

import express from 'express';
import { login } from './controllers/authController.js';
import { authenticate } from './middlewares/authenticate.js';
import * as projectController from './controllers/projectController.js'; 

const app = express();
app.use(express.json());

// Rota pública de login (ANTES das rotas de projetos)
app.post('/auth/login', login);

// Rotas públicas (GET sem token)
app.get('/api/v1/projects', projectController.list);
app.get('/api/v1/projects/:id', projectController.getById);

// Rotas protegidas (com token)
app.post('/api/v1/projects', authenticate, projectController.create);
app.patch('/api/v1/projects/:id', authenticate, projectController.update);
app.delete('/api/v1/projects/:id', authenticate, projectController.remove);

app.listen(3000, () => console.log('🚀 Servidor rodando na porta 3000'));