import React, { useEffect } from 'react'
import { createClient, getClientById, updateClient } from '../../services/Clients'

const ClientAdd = ({ setPage, id }: any) => {

  const [formData, setFormData] = React.useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: ""
  })
  const [error, setError] = React.useState(false)

  useEffect(() => {
    if (id) {
      const fetchClientData = async () => {
        const clientData = await getClientById(id)
        setFormData(clientData)
      }
      fetchClientData()
    }
  }, [id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let result
    if (id) {
      result = await updateClient(formData, id)
    } else {
      result = await createClient(formData)
    }

    if (result.statusCode) {
      setError(true)
    } else {
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: ""
      })
      setPage("client")
    }
  }

  return (
    <div className="sign-up-form">
      <h1>{id ? "Modifier un client" : "Ajouter un client"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="input">
            <p>Nom du client :</p>
            <input type="text" className="input-box" name="nom" required value={formData.nom} onChange={handleChange} />
          </div>
          <div className="input">
            <p>Prenom du client :</p>
            <input type="text" className="input-box" name="prenom" required value={formData.prenom} onChange={handleChange} />
          </div>
        </div>
        <div className="input-container">
          <div className="input">
            <p>Email du client :</p>
            <input type="email" className="input-box" name="email" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="input">
            <p>Numéro de téléphone du client :</p>
            <input type="tel" className="input-box" name="telephone" pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" required value={formData.telephone} onChange={handleChange} />
          </div>
        </div>
        {
          error && <p style={{ color: "red" }}>Erreur sur l'ajout du client</p>
        }
        <button type="submit" className="sign-btn">{id ? "Modifier" : "Ajouter"}</button>
      </form>
    </div>
  )
}

export default ClientAdd
