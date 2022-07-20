import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

import * as service from "../WizardService"

import './WizardList.css'

function WizardList() {

  const [wizards, setWizards] = useState([])

  const navigate = useNavigate()

  async function deleteWizard(id) {
    await service.deleteWizard(id)
    navigate(`/wizard-list`)
  }

  useEffect(() => {
    (async () => {
      setWizards(await service.fetchWizards())
    })()
  }, [])

  return (
    <table id='wizards'>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Delete</th>
        </tr>
        {
          wizards.map(({_id, name, age}) =>
            <tr
              key={_id}
              onClick={() => navigate(`/wizard-list/${_id}`)}>
              <td>{name}</td>
              <td>{age}</td>
              <td onClick={() => deleteWizard(_id)}>X</td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default WizardList
