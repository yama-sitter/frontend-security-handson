import express from 'express';
import { api } from './routes/api.js';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/api', api);

app.get('/', (_, res) => {
  res.end('Top Page');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
