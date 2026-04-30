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


import express from 'express';
import projectRoutes from './routes/projectRoutes.js'
import morgan from 'morgan';
const app = express();


app.use(express.json()); //Para o express lidar com json
const port = 3030;

app.use(morgan('dev'));
app.use('/api/v1/projects', projectRoutes);

app.get('/health', (req, res) => {
    res.json({status: "OK"})
})

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
})