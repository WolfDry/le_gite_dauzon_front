import React, { useEffect, useState } from 'react'
import { deleteCommentaire, getCommentaire, updateCommentaire } from '../../services/Commentaires'
import { Visual } from '../atoms'
import { green } from '../../assets/color'
import { Comment } from '../../types/Commentaire.type'

type Props = {
  setPage: any
}

const Commentaire = ({ setPage }: Props) => {

  const [commentaires, setCommentaires] = useState<Array<any>>([])

  useEffect(() => {
    async function fetchComments() {
      const data = await getCommentaire()
      const verifComment = data.filter((d: any) => !d.verif)
      setCommentaires(verifComment)
    }
    fetchComments()
  }, [commentaires])

  const checkComment = async (id: number) => {
    await updateCommentaire({ verif: true }, id)
  }

  const handleDelete = async (id: number) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce commentaire ?")) {
      const result = await deleteCommentaire(id)
      if (result) {
        const newCommentaires = commentaires.filter((c: Comment) => c.id !== id)
        setCommentaires(newCommentaires)
      }
    }
  }

  return (
    <div className="admin_container">
      <div className="table_reservation">
        <table>
          <thead>
            <tr>
              <td>
                Nom du client
              </td>
              <td>
                Commentaire
              </td>
              <td>
                Note
              </td>
              <td>
                Date
              </td>
              <td>
                Actions
              </td>
            </tr>
          </thead>
          <tbody>
            {commentaires.map((commentaire) => {
              return (
                <tr>
                  <td>
                    {commentaire.name}
                  </td>
                  <td>
                    {commentaire.commentaire}
                  </td>
                  <td>
                    {commentaire.note}
                  </td>
                  <td>
                    {new Date(commentaire.created).toLocaleDateString('fr-FR')}
                  </td>
                  <td>
                    <div style={{ cursor: "pointer" }} onClick={() => checkComment(commentaire.id)}>
                      <Visual.Svg label={!commentaire.verif ? "check" : "close"} width={25} height={25} fill={green} />
                    </div>
                    <div onClick={() => handleDelete(commentaire.id)} style={{ cursor: 'pointer' }}>
                      <Visual.Svg label='delete' width={24} height={24} />
                    </div>
                    <div onClick={() => console.log("coucou")} style={{ cursor: 'pointer' }}>
                      <Visual.Svg label='modify' width={24} height={24} />
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="a" onClick={() => setPage("commentaireAdd")}><i className="las la-comment-medical"></i> Ajouter un commentaire</div>
      <div className="a" onClick={() => setPage("commentaireListe")}>Voir la liste complete des commentaires</div>
    </div>
  )
}

export default Commentaire