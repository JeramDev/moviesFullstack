import express from 'express';
import morgan from 'morgan';
const app = express();
app.use(morgan('combined'));

app.use(express.json());

app.listen(3000, () => console.log('Ready on on port 3000'));