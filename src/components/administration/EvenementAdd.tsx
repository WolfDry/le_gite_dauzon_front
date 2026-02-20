import React, { useEffect, useState } from 'react'
import { createEvenement, getEvenementById, updateEvenement } from '../../services/Evenements'

type Props = {
  setPage: any
  id?: number | null
}

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
        date: evenement.date,
      })
    })()
  }, [id])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
        image: "",
        type: "",
        description: "",
        lien: "",
      })
      setPage("evenement")
    }
  }

  return (
    <div className="sign-up-form">
      <h1>{id ? "Modifier" : "Ajouter"} un événement</h1>
      <form onSubmit={handleSubmit}>
        <select name="type" id="type" onChange={handleChange} value={formData.type}>
          <option value="">Type d'événement</option>
          <option value="RANDO">Randonné</option>
          <option value="VISIT">Visite</option>
          <option value="EVENT">Evenement</option>
        </select>
        <input type="text" name="titre" placeholder="Titre de l'événement" onChange={handleChange} value={formData.titre} />
        <input type="text" name="description" placeholder="Description de l'événement" onChange={handleChange} value={formData.description} />
        <input type="file" name="image" placeholder="Nom de l'image de l'événement (ex: event1.jpg)" onChange={handleChange} value={formData.image} />
        <input type="text" name="lien" placeholder="Lien de l'événement" onChange={handleChange} value={formData.lien} />
        <input type="text" name="localisation" placeholder="Localisation de l'événement" onChange={handleChange} value={formData.localisation} />
        <input type="date" name="date" onChange={handleChange} value={formData.date} />
        {
          error && <p style={{ color: "red" }}>Erreur sur l'ajout de l'événement</p>
        }
        <button className="sign-btn" type='submit'>{id ? "Modifier" : "Ajouter"}</button>
      </form>
    </div >
  )
}

export default EvenementAdd
