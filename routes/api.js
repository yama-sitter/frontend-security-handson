import { Router, json } from 'express';

const router = Router();
router.use(json());

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
