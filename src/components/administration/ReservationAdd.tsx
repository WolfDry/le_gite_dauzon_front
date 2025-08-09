import React, { useEffect, useState } from 'react'
import { getClient } from '../../services/Clients'
import { createReservation } from '../../services/Reservations'
import InputPersonne from '../molecules/ReservationAccueilForm/InputPersonne'
import { getSupplements } from '../../services/Supplements'

type Props = {
  setPage: any
}

type SuppValue = {
  supplementId: number,
  nb: number
}

const ReservationAdd = ({ setPage }: Props) => {

  const [clients, setClients] = useState([])
  const [supplements, setSupplements] = useState([])
  const [suppValue, setSuppValue] = useState<SuppValue[]>([])
  const [formData, setFormData] = useState({
    debut: "",
    fin: "",
    tarif: "",
    clientId: "",
    email: "",
    nom: "",
    prenom: "",
    telephone: "",
    verif: true
  })
  const [nbPersonne, setNbPersonne] = useState([{
    label: "Adultes",
    nb: 0
  },
  {
    label: "Enfants",
    nb: 0
  },
  {
    label: "Animaux",
    nb: 0
  }])
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchClient() {
      const data = await getClient()
      setClients(data)
    }
    async function fetchSupplements() {
      const data = await getSupplements()
      setSupplements(data)
    }

    fetchClient()
    fetchSupplements()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSupplementChange = (id: number, nb: number) => {
    setSuppValue(prev => {
      const idx = prev.findIndex(s => s.supplementId === id)
      if (idx === -1) return [...prev, { supplementId: id, nb }]
      const copy = [...prev]
      copy[idx] = { supplementId: id, nb }
      return copy
    })
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload = {
      ...formData,
      nbPersonne: nbPersonne,
      tarif: parseInt(formData.tarif),
      debut: new Date(formData.debut),
      fin: new Date(formData.fin),
      clientId: formData.clientId ? parseInt(formData.clientId) : -1,
      supplements: suppValue
    }
    const result = await createReservation(payload)
    if (result.statusCode) {
      setError(true)
    } else {
      setFormData({
        debut: "",
        fin: "",
        tarif: "",
        clientId: "",
        email: "",
        nom: "",
        prenom: "",
        telephone: "",
        verif: true
      })
      setPage("reservation")
    }
  }

  return (
    <div className="sign-up-form">
      <h1>Ajouter une réservation</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="input">
            <p>Date d'arrivée :</p>
            <input
              type="date"
              className="input-box"
              name="debut"
              required
              value={formData.debut}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <p>Date de départ :</p>
            <input
              type="date"
              className="input-box"
              name="fin"
              required
              value={formData.fin}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <p>Tarif du séjour :</p>
            <input
              type="number"
              className="input-box"
              name="tarif"
              min='0'
              required
              value={formData.tarif}
              onChange={handleChange}
            />
          </div>
        </div>
        <p>Nombre d'adultes :</p>
        <InputPersonne isInReservation={false} value={nbPersonne} setValue={setNbPersonne} />
        <h2 style={{ margin: "15px 0" }}>Suppléments :</h2>
        {supplements.map((supplement: any) => {
          const current = suppValue.find(s => s.supplementId === supplement.id)?.nb ?? 0
          return (
            <div key={supplement.id}>
              <label>Nombre de {supplement.label} : </label>
              <input
                type="number"
                min={0}
                value={current}
                onChange={(e) => handleSupplementChange(supplement.id, Number(e.target.value))}
              />
            </div>
          )
        })}

        <div className="input-container">
          <p>Client de la réservation :</p>
          <select
            id="select_form"
            name="clientId"
            value={formData.clientId}
            onChange={handleChange}
          >
            <option value="">Veuillez sélectionner un client</option>
            {clients.map((client: any) => (
              <option key={client.id} value={client.id}>
                {client.nom} {client.prenom}
              </option>
            ))}
          </select>
        </div>
        <p>Ou</p>
        <div className="input-container">
          <div className="input">
            <p>E-mail du client :</p>
            <input
              type="email"
              className="input-box"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <p>Nom du client:</p>
            <input
              type="text"
              className="input-box"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-container">
          <div className="input">
            <p>Prénom du client :</p>
            <input
              type="text"
              className="input-box"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <p>Numéro de téléphone :</p>
            <input
              type="text"
              className="input-box"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
            />
          </div>
        </div>
        {
          error && <p style={{ color: "red" }}>Erreur sur l'ajout de la réservation</p>
        }
        <button className="sign-btn" type='submit'> Ajouter </button>
      </form>
    </div >
  )
}

export default ReservationAdd
