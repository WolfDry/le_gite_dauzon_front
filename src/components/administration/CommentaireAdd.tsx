import React, { useEffect, useState } from 'react'
import { createCommentaire, getCommentaireById, updateCommentaire } from '../../services/Commentaires'

type FormData = {
  name: string
  created: string
  commentaire: string
  note: number
  verif: boolean
}

type Props = {
  setPage: any
  id?: number | null
}

const CommentaireAdd = ({ setPage, id }: Props) => {

  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    created: new Date().toISOString().slice(0, 10),
    commentaire: "",
    note: 0,
    verif: false
  })
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!id) return
    (async () => {
      const commentaire = await getCommentaireById(id)
      setFormData({
        name: commentaire.name,
        created: new Date(commentaire.created).toISOString().slice(0, 10),
        commentaire: commentaire.commentaire,
        note: commentaire.note,
        verif: commentaire.verif
      })
    })()
  }, [id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement
    const { name } = target
    let value: any

    if ((target as HTMLInputElement).type === 'checkbox') {
      value = (target as HTMLInputElement).checked
    } else if ((target as HTMLInputElement).type === 'number') {
      const raw = (target as HTMLInputElement).value
      value = raw === '' ? 0 : Number(raw)
    } else {
      value = target.value
    }

    console.log(name, value)

    setFormData({ ...formData, [name]: value } as FormData)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const payload: any = {
      ...formData,
      created: new Date(formData.created ?? "")
    }

    let result

    if (id)
      result = await updateCommentaire(payload, id)
    else
      result = await createCommentaire(payload)
    console.log(result)
    if (result.statusCode) {
      setError(true)
    } else {
      setPage("commentaireListe")
    }
  }

  return (
    <div className="sign-up-form">
      <h1>{id ? 'Modifier' : 'Ajouter'} un commentaire</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="input">
            <p>Nom du client :</p>
            <input type="text" className="input-box" name="name" value={formData.name} onChange={handleChange} />
          </div>
        </div>
        <div className="input-container">
          <div className="input">
            <p>Date du commentaire :</p>
            <input type="date" className="input-box" name="created" value={formData.created} onChange={handleChange} />
          </div>
        </div>
        <div className="input-container">
          <div className="input"></div>
        </div>
        <div className="input-container">
          <div className="input" id="textarea">
            <p>Commentaire :</p>
            <textarea className="input-box" id="mytextarea" name="commentaire" value={formData.commentaire} onChange={handleChange}></textarea>
          </div>
        </div>
        <div className="input-container">
          <div className="input">
            <p>Note du commentaire :</p>
            <input type="number" className="input-box" min="0" max="5" name="note" value={formData.note} onChange={handleChange} />
          </div>
          <div className="input">
            <p>Verif du commentaire :</p>
            <input type="checkbox" className="input-box" name="verif" checked={formData.verif} onChange={handleChange} />
          </div>
        </div>
        {
          error && <p style={{ color: "red" }}>Erreur sur l'ajout de l'événement</p>
        }
        <button type="submit" className="sign-btn">{id ? 'Modifier' : 'Ajouter'}</button>
      </form>
    </div>
  )
}

export default CommentaireAdd