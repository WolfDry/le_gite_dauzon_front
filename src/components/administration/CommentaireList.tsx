import React, { useEffect, useState } from 'react'
import { deleteCommentaire, getCommentaire, updateCommentaire } from '../../services/Commentaires'
import { Visual } from '../atoms'
import { green } from '../../assets/color'
import { Comment } from '../../types/Commentaire.type'

const CommentaireList = ({ setPage }: any) => {

  const [commentaires, setCommentaires] = useState<Array<any>>([])

  useEffect(() => {
    async function fetchComments() {
      const data = await getCommentaire()
      setCommentaires(data)
    }
    fetchComments()
  }, [])

  const checkComment = async (id: number, verif: boolean) => {
    await updateCommentaire({ verif: !verif }, id)
    const data = await getCommentaire()
    setCommentaires(data)
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
    <div className="admin_content">
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
              {
                commentaires.map((commentaire) => {
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
                        <div style={{ cursor: "pointer" }} onClick={() => checkComment(commentaire.id, commentaire.verif)}>
                          <Visual.Svg label={!commentaire.verif ? "check" : "close"} width={25} height={25} fill={!commentaire.verif ? green : "red"} />
                        </div>
                        <div onClick={() => handleDelete(commentaire.id)} style={{ cursor: 'pointer' }}>
                          <Visual.Svg label='delete' width={24} height={24} />
                        </div>
                        <div onClick={() => setPage("commentaireAdd", commentaire.id)} style={{ cursor: 'pointer' }}>
                          <Visual.Svg label='modify' width={24} height={24} />
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div >
  )
}

export default CommentaireList