import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import { fetchWizardById } from '../WizardService'

function WizardDetail() {
  const [wizard, setWizard] = useState(undefined)

  const params = useParams()

  useEffect(() => {
    (async () => {
      setWizard(await fetchWizardById(params.id))
    })()
  }, [params.id])

  return (
    wizard && <div>
      <h2>Wizard Detail</h2>
      <p>Name: {wizard.name}</p>
      <p>Age: {wizard.age}</p>
      <p>Id: {wizard._id}</p>
    </div>
  )
}

export default WizardDetail
