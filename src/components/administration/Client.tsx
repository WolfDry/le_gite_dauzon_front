import React, { useEffect, useState } from 'react'
import { deleteClient, getClient } from '../../services/Clients'
import { Visual } from '../atoms'

const Client = ({ setPage }: any) => {

  const [clients, setClients] = useState<Array<any>>([])

  useEffect(() => {
    async function fetchClients() {
      const data = await getClient()
      setClients(data)
    }
    fetchClients()
  }, [])

  const suppClient = async (id: number) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce client ?")) {
      const result = await deleteClient(id)
      if (result) {
        setClients(clients.filter(client => client.id !== id))
      }
    }
  }

  const modifyClient = (id: number) => {
    setPage("clientAdd", id)
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
                  <tr key={client.id}>
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
                      <div onClick={() => suppClient(client.id)} style={{ cursor: 'pointer' }}>
                        <Visual.Svg label='delete' width={24} height={24} />
                      </div>
                      <div onClick={() => modifyClient(client.id)} style={{ cursor: 'pointer' }}>
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
      <a onClick={() => setPage("clientAdd")}><i className="las la-user-plus"></i> Ajouter un client</a>
    </div>
  )
}

export default Client