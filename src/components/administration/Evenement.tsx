import React, { useEffect } from 'react'
import { Visual } from '../atoms'
import { deleteEvenement, getEvenements } from '../../services/Evenements'
import { Evenement as EvenementType } from '../../types/Evenement.type'

const API_URL = process.env.REACT_APP_API_URL

const Evenement = ({ setPage }: any) => {

  const [prix, setPrix] = React.useState<EvenementType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getEvenements()
      setPrix(response)
    }
    fetchData()
  }, [])

  const handleDelete = async (id: number) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet evenement ?")) {
      const result = await deleteEvenement(id)
      if (result) {
        const newPrix = prix.filter((p: EvenementType) => p.id !== id)
        setPrix(newPrix)
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
                Titre
              </td>
              <td>
                Image
              </td>
              <td>
                Type
              </td>
              <td>
                Description
              </td>
              <td>
                Actions
              </td>
            </tr>
          </thead>
          <tbody>
            {prix.map((e: EvenementType) => (
              <tr key={e.id}>
                <td>{e.titre}</td>
                <td><Visual.Image src={`${API_URL}/uploads/${e.image}`} height="100%" width="100%" /></td>
                <td>{e.type}</td>
                <td>{e.description}</td>
                <td>
                  <div onClick={() => handleDelete(e.id)} style={{ cursor: 'pointer' }}>
                    <Visual.Svg label='delete' width={24} height={24} />
                  </div>
                  <div onClick={() => setPage("evenementAdd", e.id)} style={{ cursor: 'pointer' }}>
                    <Visual.Svg label='modify' width={24} height={24} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="a" onClick={() => setPage("evenementAdd")}><i className="las la-user-plus"></i> Ajouter un événement</div>
    </div>
  )
}

export default Evenement