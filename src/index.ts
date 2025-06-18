import express from 'express';
import { htmlPage } from './pagina';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(htmlPage);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
