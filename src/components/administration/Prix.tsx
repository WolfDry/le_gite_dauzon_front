import React, { useEffect } from 'react'
import { getTarif } from '../../services/Tarifs'
import { Tarif } from '../../types/Tarif.type'

const Prix = ({ setPage }: any) => {

  const [prix, setPrix] = React.useState<Tarif[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTarif()
      console.log(response)
      setPrix(response)
    }
    fetchData()
  }, [])

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