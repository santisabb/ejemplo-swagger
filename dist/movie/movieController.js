import { MovieRepository } from './movieRepository.js';
import { Movie } from './movieEntity.js';
const movieRepo = new MovieRepository();
function findAll(req, res) {
    res.json({ data: movieRepo.findAll() });
}
function create(req, res) {
    const input = req.body;
    const movieInput = new Movie(input.title, input.year, input.director, input.genre);
    const movie = movieRepo.add(movieInput);
    return res.status(201).send({ message: 'Movie succefully created' });
}
function findOne(req, res) {
    const id = req.params.movieId;
    const movie = movieRepo.findOne({ id });
    if (!movie) {
        return res.status(404).send({ message: 'Movie not found bro' });
    }
    res.json({ data: movie });
}
function update(req, res) {
    req.body.movieId = req.params.movieId;
    const movie = movieRepo.update(req.body);
    if (!movie) {
        return res.status(404).send({ message: 'Movie not found bro' });
    }
    return res.status(200).send({ message: 'Movie succefully updated' });
}
function remove(req, res) {
    const id = req.params.movieId;
    const movie = movieRepo.delete({ id });
    if (!movie) {
        return res.status(404).send({ message: 'Movie not found bro' });
    }
    res.status(200).send({ message: 'Movie succefully deleted' });
}
export { findAll, findOne, create, update, remove };
//# sourceMappingURL=movieController.js.map