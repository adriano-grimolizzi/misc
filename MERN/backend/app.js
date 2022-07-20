const express = require('express')
const cors = require('cors')

// const winstonOptions = require('./winston')

const wizardsRoutes = require('./wizards/wizardRoutes')

const app = express()

app.use([
    express.json(),
    cors(),
    // winstonOptions,
])

app.use('/wizards', wizardsRoutes)

module.exports = app
