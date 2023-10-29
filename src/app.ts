import express from "express"
import  {movieRoute}  from "./movie/movieRoutes.js"
import  swaggerUi  from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'


const app = express()

const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Movies Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Movies",
          url: "https://logrocket.com",
          email: "info@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost:8080",
        },
      ],
    },
    apis: ["./src/movie/movieRoutes.ts"],
}
app.use(express.json())
app.use('/', movieRoute)
const specs = swaggerJSDoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  )

app.listen(8080, () => {
    console.log('listening on server 8080')
})
