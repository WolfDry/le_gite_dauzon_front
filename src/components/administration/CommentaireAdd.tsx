import React from 'react'
import { createCommentaire } from '../../services/Commentaires'

type FormData = {
  name: string
  created: string
  commentaire: string
  note: number
  verif: boolean
}

const CommentaireAdd = () => {

  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    created: new Date().toISOString().slice(0, 10),
    commentaire: "",
    note: 0,
    verif: false
  })

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

    setFormData({ ...formData, [name]: value } as unknown as FormData)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createCommentaire(formData)
  }

  return (
    <div className="sign-up-form">
      <h1>Ajouter un commentaire</h1>
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
        <button type="submit" className="sign-btn">Ajouter</button>
      </form>
    </div>
  )
}

export default CommentaireAdd