import { Movie } from "./movieEntity";
const movies = [
    new Movie('Forrest Gump', 1994, 'Robert Zemeckis', 'Drama', 'a02b91bc-3769-4221-beb1-d7a3aeba7dad')
];
export class MovieRepository {
    findAll() {
        return movies;
    }
    findOne(item) {
        return movies.find((movies) => movies.movieId === item.id);
    }
    add(item) {
        movies.push(item);
        return item;
    }
    update(item) {
        const movieIndex = movies.findIndex((movies) => movies.movieId === item.movieId);
        if (movieIndex !== 1) {
            movies[movieIndex] = { ...movies[movieIndex], ...item };
        }
        return movies[movieIndex];
    }
    delete(item) {
        const movieIndex = movies.findIndex((movies) => movies.movieId === item.id);
        if (movieIndex !== 1) {
            const deletedMovie = movies[movieIndex];
            movies.splice(movieIndex, 1);
            return deletedMovie;
        }
    }
}
//# sourceMappingURL=movieRepository.js.map