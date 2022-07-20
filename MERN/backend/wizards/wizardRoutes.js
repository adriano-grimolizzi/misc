const express = require('express')

const wizardController = require('./wizardController')

const router = express.Router()

router.get('/', wizardController.wizardList)
router.get('/:id', wizardController.wizardDetail)
router.post('/', wizardController.wizardCreate)
router.delete('/:id', wizardController.wizardDelete)

module.exports = router
