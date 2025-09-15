import React, { useEffect, useState } from 'react'
import { getCommentaire, updateCommentaire } from '../../services/Commentaires'
import { Visual } from '../atoms'
import { green } from '../../assets/color'

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
                    <a href="/administration/commentaire_add/<?= $c->id ?>"><i className="las la-cog"></i></a>
                    <div style={{ cursor: "pointer" }} onClick={() => checkComment(commentaire.id)}>
                      <Visual.Svg label="check" width={25} height={25} fill={green} />
                    </div>
                    <a href="/administration/commentaire_delete/<?= $c->id ?>" id="delete" ><i className="las la-comment-slash"></i></a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <a onClick={() => setPage("commentaireAdd")}><i className="las la-comment-medical"></i> Ajouter un commentaire</a>
      <a onClick={() => setPage("commentaireListe")}>Voir la liste complete des commentaires</a>
    </div>
  )
}

export default Commentaire