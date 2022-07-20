const service = require('./mongo/wizardService')

async function wizardList(_req, res) {
    const result = await service.findWizards()
    res.send(result)
}

async function wizardDetail(req, res) {
    const result = await service.findWizardsById(req.params.id)
    res.send(result)
}

async function wizardCreate(req, res) {
    const result = await service.saveWizard(req.body)
    res.send(result)
}

async function wizardDelete(req, res) {
    const result = await service.deleteWizard(req.params.id)
    res.send(result)
}

module.exports = {
    wizardList,
    wizardDetail,
    wizardCreate,
    wizardDelete,
}
