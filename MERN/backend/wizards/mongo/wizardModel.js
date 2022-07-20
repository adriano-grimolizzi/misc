const mongoose = require('mongoose')

const wizardSchema = require("./wizardSchema");

const WizardModel = mongoose.model('Wizard', wizardSchema)

module.exports = WizardModel
