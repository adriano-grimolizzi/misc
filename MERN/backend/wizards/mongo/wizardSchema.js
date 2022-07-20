const mongoose = require('mongoose')

const { Schema } = mongoose

const wizardSchema = new Schema({
  name: String,
  age: Number,
})

module.exports = wizardSchema
