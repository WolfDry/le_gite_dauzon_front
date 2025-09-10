import React, { useEffect, useState } from 'react'
import { getCommentaire } from '../../services/Commentaires'

const CommentaireList = ({ setPage }: any) => {

  const [commentaires, setCommentaires] = useState<Array<any>>([])

  useEffect(() => {
    async function fetchComments() {
      const data = await getCommentaire()
      setCommentaires(data)
    }
    fetchComments()
  }, [])

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
                        <a href="/administration/commentaire_add/<?= $c->id ?>"><i className="las la-cog"></i></a>
                        <a href="/administration/commentaire_delete/<?= $c->id ?>" id="delete"><i className="las la-comment-slash"></i></a>
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