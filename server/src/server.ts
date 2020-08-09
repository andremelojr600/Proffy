import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);





//GET: Buscar ou listar uma informação
//POST: Criar alguma nova informação
//PUT: Atualizar uma informação existente
//DELETE: Deletar alguma informoção existente

// Corpo (Request body : Dados para criação ou 
//atualização do registro)
//Route Params: Identificar qual recurso eu quero att ou deletar
//Query Params: Paginação , filtros , ordenação




app.listen(3333);
