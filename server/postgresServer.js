const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// const db = require('./queries')
var cors = require('cors');




app.use(cors({
    origin: 'http://localhost:3000'
  }));

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Mvp example running Node.js, Express, and Postgres API' })
  })


require("./back-end/routes/postgresRoutes.js")(app);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

