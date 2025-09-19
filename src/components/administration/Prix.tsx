import React, { useEffect } from 'react'
import { deleteTarif, getTarif } from '../../services/Tarifs'
import { Visual } from '../atoms'
import { TarifFrequence } from '../../types/Tarif.type'

type Tarif = {
  id: number
  desc: string
  label: string
  date: string[]
  vacance?: boolean
  prix: number
  frequence: TarifFrequence[]
}

const Prix = ({ setPage }: any) => {

  const [prix, setPrix] = React.useState<Tarif[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTarif()
      setPrix(response)
    }
    fetchData()
  }, [])

  const handleDelete = async (id: number) => {
    console.log("Attempting to delete tarif with id:", id) // Debugging line
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce prix ?")) {
      const result = await deleteTarif(id)
      console.log(result)
      if (result) {
        const newPrix = prix.filter((p: Tarif) => p.id !== id)
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
                Label
              </td>
              <td>
                Description
              </td>
              <td>
                Date
              </td>
              <td>
                Prix
              </td>
              <td>
                Vacance
              </td>
              <td>
                Fréquence
              </td>
              <td>
                Actions
              </td>
            </tr>
          </thead>
          <tbody>
            {prix.map((p: Tarif) => (
              <tr key={p.id}>
                <td>{p.label}</td>
                <td>{p.desc}</td>
                <td>{p.date.join(", ")}</td>
                <td>{p.prix} €</td>
                <td>{p.vacance ? "Oui" : "Non"}</td>
                <td>{p.frequence.join(", ")}</td>
                <td>
                  <div onClick={() => handleDelete(p.id)} style={{ cursor: 'pointer' }}>
                    <Visual.Svg label='delete' width={24} height={24} />
                  </div>
                  <div onClick={() => setPage("prixAdd", p.id)} style={{ cursor: 'pointer' }}>
                    <Visual.Svg label='modify' width={24} height={24} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a onClick={() => setPage("prixAdd")}><i className="las la-user-plus"></i> Ajouter un prix</a>
    </div>
  )
}

export default Prix