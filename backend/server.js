const http = require('http')

const app = require('./app')

const PORT = process.env.PORT || 3001

const httpServer = http.createServer(app)

const connectToMongo = require('./mongo')

connectToMongo()

httpServer.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}.`)
})
