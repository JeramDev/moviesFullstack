import express, { Router } from 'express';
const router:Router = express.Router();

const movies:Array<Object> = [
  {name: "El señor de los anillos", id: 1,  likes: 0},
  {name: "Star Wars", id: 2,  likes: 0}
];

router.get('/', (req, res) => res.json(movies));

export default router;