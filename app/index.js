import express from 'express';
import { configureVideoRoutes } from './routes/videosRoutes';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.send('Peck Project API');
});

// Setup Route for Videos on our App Server
configureVideoRoutes(app);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));