const WizardModel = require('./wizardModel')

async function findWizards() {
  return await WizardModel.find()
}

async function findWizardsById(id) {
  return await WizardModel.findById(id)
}

async function saveWizard(wizard) {
  const wizardModel = new WizardModel(wizard)
  return await wizardModel.save()
}

async function deleteWizard(id) {
  return await WizardModel.findByIdAndDelete(id)
}

module.exports = {
  findWizards,
  findWizardsById,
  saveWizard,
  deleteWizard,
}
