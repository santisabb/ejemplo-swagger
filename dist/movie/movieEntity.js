import crypto from 'node:crypto';
export class Movie {
    constructor(title, year, director, genre, movieId = crypto.randomUUID()) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.genre = genre;
        this.movieId = movieId;
    }
}
//# sourceMappingURL=movieEntity.js.map