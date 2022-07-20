const mongoose = require('mongoose')

const URI = 'mongodb://localhost:27017/hogwarts'

async function connectToMongo() {

    await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })

    console.log('MongoDB connection established successfully.')
}

module.exports = connectToMongo
