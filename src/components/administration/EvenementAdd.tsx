import React, { useEffect, useState } from 'react'
import { createEvenement, getEvenementById, updateEvenement } from '../../services/Evenements'

type Props = {
  setPage: any
  id?: number | null
}

const API_URL = process.env.REACT_APP_API_URL

const EvenementAdd = ({ setPage, id }: Props) => {

  const [formData, setFormData] = useState<{
    titre: string,
    image: string | undefined,
    date?: string,
    type: string,
    localisation?: string,
    description: string,
    lien?: string,
  }>({
    titre: "",
    image: undefined,
    type: "",
    description: "",
    lien: "",
  })
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!id) return
    (async () => {
      const evenement = await getEvenementById(id)
      setFormData({
        titre: evenement.titre,
        image: undefined,
        type: evenement.type,
        description: evenement.description,
        lien: evenement.lien,
        localisation: evenement.localisation,
        date: new Date(evenement.date).toISOString().split('T')[0],
      })
    })()
  }, [id])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(false)

    const payload: any = {
      ...formData,
      date: new Date(formData.date ?? "")
    }

    let result
    if (id) result = await updateEvenement(payload, id)
    else result = await createEvenement(payload)

    if (result.statusCode) {
      setError(true)
    } else {
      setFormData({
        titre: "",
        image: undefined,
        type: "",
        description: "",
        lien: "",
      })
      setPage("evenement")
    }
  }

  const handleUpload = async (file: File | undefined) => {
    if (!file) return
    const formData = new FormData()
    formData.append("image", file)

    const response = await fetch(`${API_URL}/upload`, {
      method: "POST",
      body: formData,
    })
    if (response.ok) {
      const data = await response.json();
      setFormData(prev => ({ ...prev, image: data.filename }))
    } else {
      setError(true)
    }
  }


  return (
    <div className="sign-up-form">
      <h1>{id ? "Modifier" : "Ajouter"} un événement</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="input">
            <p>Titre :</p>
            <select name="type" id="type" onChange={handleChange} value={formData.type}>
              <option value="">Type d'événement</option>
              <option value="RANDO">Randonnée</option>
              <option value="VISIT">Visite</option>
              <option value="EVENT">Evenement</option>
            </select>
          </div>
        </div>
        <div className="input-container">
          <div className="input">
            <p>Titre :</p>
            <input className="input-box" type="text" name="titre" placeholder="Titre de l'événement" onChange={handleChange} value={formData.titre} />
          </div>
        </div>
        <div className="input-container">
          <div className="input">
            <p>Description :</p>
            <textarea className="input-box" name="description" placeholder="Description de l'événement" onChange={handleChange} value={formData.description} />
          </div>
        </div>
        <div className="input-container">
          <div className="input">
            <p>Image :</p>
            <input className="input-box" type="file" accept="image/*" name="image" placeholder="Nom de l'image de l'événement (ex: event1.jpg)" onChange={(e) => handleUpload(e.target.files?.[0])} />
          </div>
        </div>
        <div className="input-container">
          <div className="input">
            <p>Lien :</p>
            <input className="input-box" type="text" name="lien" placeholder="Lien de l'événement" onChange={handleChange} value={formData.lien} />
          </div>
        </div>

        <div className="input-container">
          <div className="input">
            <p>Localisation :</p>
            <input className="input-box" type="text" name="localisation" placeholder="Localisation de l'événement" onChange={handleChange} value={formData.localisation} />
          </div>
        </div>
        <div className="input-container">
          <div className="input">
            <p>Date :</p>
            <input className="input-box" type="date" name="date" onChange={handleChange} value={formData.date} />
          </div>
        </div>
        {
          error && <p style={{ color: "red" }}>Erreur sur l'ajout de l'événement</p>
        }
        <button className="sign-btn" type='submit'>{id ? "Modifier" : "Ajouter"}</button>
      </form>
    </div >
  )
}

export default EvenementAdd
