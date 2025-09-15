import React, { useEffect, useState } from 'react'
import { getClient } from '../../services/Clients'

const Client = ({ setPage }: any) => {

  const [clients, setClients] = useState<Array<any>>([])

  useEffect(() => {
    async function fetchClients() {
      const data = await getClient()
      setClients(data)
    }
    fetchClients()
  }, [])

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
                Prénom du client
              </td>
              <td>
                Email
              </td>
              <td>
                Téléphone
              </td>
              <td>
                Actions
              </td>
            </tr>
          </thead>
          <tbody>
            {
              clients.map((client) => {
                return (
                  <tr>
                    <td>
                      {client.nom}
                    </td>
                    <td>
                      {client.prenom}
                    </td>
                    <td>
                      {client.email}
                    </td>
                    <td>
                      {client.telephone}
                    </td>
                    <td>
                      <a href="/administration/client_add/<?= $c->id ?>"><i className="las la-cog"></i></a>
                      <a href="/administration/deleteClient/<?= $c->id ?>" id="delete"><i className="las la-user-slash"></i></a>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <a onClick={() => setPage("clientAdd")}><i className="las la-user-plus"></i> Ajouter un client</a>
    </div>
  )
}

export default Client