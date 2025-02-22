import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello,GET request!');
});

app.post('/data', (req: Request, res: Response) => {
  const data = req.body;
  res.json({
    message: 'Data received',
    receivedData: data
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
