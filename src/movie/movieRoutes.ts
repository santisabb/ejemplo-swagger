
import { Router } from "express"
import { findAll, findOne, create, update, remove } from "./movieController.js"

export const movieRoute = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the movie
 *         title:
 *           type: string
 *           description: The title of the movie
 *         year:
 *           type: number
 *           description: Release date of the movie
 *         director:
 *           type: string
 *           description: The movie director
 *         genre:
 *           type: array
 *           description: The genres of the movie
 *       example:
 *         id: a02b91bc-3769-4221-beb1-d7a3aeba7dad
 *         title: Forrest Gump
 *         year: 1994
 *         director: Robert Zemeckis
 *         genre: [Drama]
 */


/**
 * @swagger
 * tags:
 *   name: movies
 *   description: The movies managing API
 * /movies:
 *   get:
 *     summary: Lists all the movies
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: The list of the movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 *   post:
 *     summary: Create a new movie
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: The created movie.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       500:
 *         description: Some server error
 * /movies/{id}:
 *   get:
 *     summary: Get the movie by id
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie id
 *     responses:
 *       200:
 *         description: The movie response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       404:
 *         description: The movie was not found
 *   put:
 *    summary: Update the movie by the id
 *    tags: [Movies]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The movie id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Movie'
 *    responses:
 *      200:
 *        description: The movie was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Movie'
 *      404:
 *        description: The movie was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the movie by id
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie id
 *
 *     responses:
 *       200:
 *         description: The movie was deleted
 *       404:
 *         description: The movie was not found
 */
movieRoute.get('/movies', findAll)
movieRoute.post('/movies', create)
movieRoute.get('/movies/:moviesId', findOne)
movieRoute.put('/movies/:moviesId', update)
movieRoute.delete('/movies/:moviesId', remove)