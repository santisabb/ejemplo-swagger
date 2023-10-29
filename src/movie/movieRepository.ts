import { it } from "node:test";
import { Repository } from "../shared/repository.js"
import { Movie } from "./movieEntity.js"

const movies = [
    new Movie(
        'Forrest Gump',
        1994,
        'Robert Zemeckis',
        ['Drama'],
        'a02b91bc-3769-4221-beb1-d7a3aeba7dad'
    )
]

export class MovieRepository implements Repository<Movie>{
    public findAll(): Movie[] | undefined {
        return movies
    }

    public findOne(item: { id: string }): Movie | undefined {
        return movies.find((movies) => movies.movieId === item.id)
    }

    public add(item: Movie): Movie | undefined {
        movies.push(item)
        return item
    }

    public update(item: Movie): Movie | undefined {
        const movieIndex = movies.findIndex((movies) => movies.movieId === item.movieId)

        if (movieIndex !==1){
            movies[movieIndex] = { ...movies[movieIndex], ...item}
        }
        return movies[movieIndex]
    }

    public delete(item: { id: string; }): Movie | undefined {
        const movieIndex = movies.findIndex((movies) => movies.movieId === item.id)

        if (movieIndex !==1){
            const deletedMovie = movies[movieIndex]
            movies.splice(movieIndex, 1)
            return deletedMovie
        }
    }
}