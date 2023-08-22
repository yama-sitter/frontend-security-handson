import express from 'express';
import { randomBytes } from 'crypto';
import { api } from './routes/api.js';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/api', api);

app.get('/', (_, res) => {
  res.end('Top Page');
});

app.get('/csp', (_, res) => {
  const nonceValue = randomBytes(16).toString('base64');
  res.header(
    'Content-Security-Policy',
    `script-src 'nonce-${nonceValue}' 'strict-dynamic';` +
    "object-src 'none';" +
    "base-uri 'none';" +
    "require-trusted-types-for 'script';",
  );
  res.render('csp', { nonce: nonceValue });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
