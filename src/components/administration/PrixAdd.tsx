import React from 'react'
import { createClient } from '../../services/Clients'
import { createTarif } from '../../services/Tarifs'
import { TarifFrequence } from '../../types/Tarif.type'

const PrixAdd = ({ setPage }: any) => {

  const [formData, setFormData] = React.useState({
    label: "",
    desc: "",
    date: [] as string[],
    vacance: false,
    prix: 0,
    frequence: [] as TarifFrequence[]
  })
  const [error, setError] = React.useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target
    if (name === "date") {
      const dates = value.split(",  ").map(date => date.trim())
      setFormData(prev => ({ ...prev, date: dates }))
      return
    }
    setFormData(prev => ({
      ...prev,
      [name]:
        type === 'checkbox' ? checked :
          type === 'number' ? Number(value) :
            value
    }))
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions).map(
      (o) => o.value as TarifFrequence
    )
    setFormData(prev => ({ ...prev, frequence: selected }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formData.desc === "")
      formData.desc = " "

    const result = await createTarif(formData)
    if (result.statusCode) {
      setError(true)
    } else {
      setFormData({
        label: "",
        desc: "",
        date: [] as string[],
        vacance: false,
        prix: 0,
        frequence: [] as TarifFrequence[]
      })
      setPage("prix")
    }
  }

  return (
    <div className="sign-up-form">
      <h1>Ajouter un prix</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="input">
            <p>Label :</p>
            <input
              type="text"
              className="input-box"
              name="label"
              required
              value={formData.label}
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <p>Description :</p>
            <input
              type="text"
              className="input-box"
              name="desc"
              value={formData.desc}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="input-container">
          <div className="input">
            <p>Date :</p>
            <input
              type="text"
              className="input-box"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </div>

          <div className="input">
            <p>Vacance ? :</p>
            <input
              type="checkbox"
              className="input-box"
              name="vacance"
              checked={formData.vacance}
              onChange={handleInputChange}
            />
          </div>

          <div className="input">
            <p>Prix :</p>
            <input
              type="number"
              className="input-box"
              name="prix"
              required
              value={formData.prix}
              onChange={handleInputChange}
            />
          </div>

          <div className="input">
            <p>Fréquence :</p>
            <select
              className="input-box"
              name="frequence"
              value={formData.frequence}
              onChange={handleSelectChange}
              multiple
            >
              {Object.values(TarifFrequence).map((freq) => (
                <option key={freq} value={freq}>
                  {freq}
                </option>
              ))}
            </select>
          </div>
        </div>

        {error && <p style={{ color: "red" }}>Erreur sur l'ajout du prix</p>}
        <button type="submit" className="sign-btn">Ajouter</button>
      </form>
    </div>
  )
}

export default PrixAdd
