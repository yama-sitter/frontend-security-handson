import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (_, res) => {
  res.end('Top Page');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
