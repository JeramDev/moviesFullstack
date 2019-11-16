import express from 'express';
const app = express();
import moviesRouter from './api/movies/moviesRoutes'

app.use(express.json());
app.use('/movies', moviesRouter);

app.listen(3000, () => console.log('Ready on port 3000'));