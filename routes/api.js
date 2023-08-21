import { Router, json } from 'express';

const allowList = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://site.example:3000',
  'http://site.example:3001',
];

const router = Router();

router.use(json());

router.use((req, res, next) => {
  if (req.headers.origin && allowList.includes(req.headers.origin)) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
  }

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Headers', 'X-Token');
  }

  next();
});

router.get('/', ({ query, headers }, res) => {
  res.setHeader('X-Timestamp', Date.now());

  let message = query?.message;
  const lang = headers?.['x-lang'];

  if (message === '') {
    res.status(400);

    if (lang === 'en') {
      message = 'message is empty.';
    } else {
      message = 'messageの値が空です。';
    }
  }

  res.send({ message });
});

router.post('/', ({ body }, res) => {
  console.log(body);
  res.end();
});

export { router as api };
