import crypto from 'node:crypto'

export class Movie{
    constructor(
        public title: string,
        public year: number,
        public director: string,
        public genre: string[],
        public movieId = crypto.randomUUID()
    ) {}
}