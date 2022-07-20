import axios from 'axios'

const WIZARDS_URL = 'http://localhost:3001/wizards'

async function fetchWizards() {
    const { data } = await axios.get(WIZARDS_URL)
    // console.log(data)
    return data
}

async function fetchWizardById(id) {
    const { data } = await axios.get(`${WIZARDS_URL}/${id}`)
    // console.log(data)
    return data
}

async function createWizard(wizard) {
    const response = await axios.post(WIZARDS_URL, wizard)
    // console.log(response)
    return response
}

async function deleteWizard(id) {
    const { data } = await axios.delete(`${WIZARDS_URL}/${id}`)
    // console.log(data)
    return data
}

export {
    fetchWizards,
    fetchWizardById,
    createWizard,
    deleteWizard,
}
