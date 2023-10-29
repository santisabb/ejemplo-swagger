import express from "express";
import { movieRoute } from "./movie/movieRoutes";
const app = express();
app.use(express.json());
app.use('/api/movies', movieRoute);
app.use((_, res) => {
    return res.status(404).send({ message: 'Resource not found' });
});
app.listen(8080, () => {
    console.log('listening on server 8080');
});
//# sourceMappingURL=app.js.map