import { Router } from "express";
import { findAll, findOne, create, update, remove } from "./movieController";
export const movieRoute = Router();
movieRoute.get('/', findAll);
movieRoute.post('/', create);
movieRoute.get('/:id', findOne);
movieRoute.put('/:id', update);
movieRoute.delete('/:id', remove);
//# sourceMappingURL=movieRoutes.js.map