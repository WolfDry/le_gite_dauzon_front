import React, { useEffect, useState } from 'react'
import "../assets/administration.css"
import { Container } from '../components/atoms'
import SideBar from '../components/administration/SideBar'
import Home from '../components/administration/Home'
import Reservation from '../components/administration/Reservation'
import ReservationAdd from '../components/administration/ReservationAdd'
import Client from '../components/administration/Client'
import Commentaire from '../components/administration/Commentaire'
import CommentaireList from '../components/administration/CommentaireList'
import ClientAdd from '../components/administration/ClientAdd'
import CommentaireAdd from '../components/administration/CommentaireAdd'
import Prix from '../components/administration/Prix'
import PrixAdd from '../components/administration/PrixAdd'

const Administration = () => {

  const [page, setPage] = useState("home")
  const [id, setId] = useState<number | null>(null)

  const changePage = (newPage: string, newId: number | null) => {
    setPage(newPage)
    setId(newId)
  }

  return (
    <Container.Column>
      <SideBar currentPage={page} setPage={changePage} />
      {page === "home" ? <Home setPage={changePage} /> : null}
      {page === "reservation" ? <Reservation setPage={changePage} /> : null}
      {page === "reservationAdd" ? <ReservationAdd setPage={changePage} id={id} /> : null}
      {page === "client" ? <Client setPage={changePage} /> : null}
      {page === "clientAdd" ? <ClientAdd setPage={changePage} id={id} /> : null}
      {page === "commentaire" ? <Commentaire setPage={changePage} /> : null}
      {page === "commentaireListe" ? <CommentaireList setPage={changePage} /> : null}
      {page === "commentaireAdd" ? <CommentaireAdd setPage={changePage} /> : null}
      {page === "prix" ? <Prix setPage={changePage} /> : null}
      {page === "prixAdd" ? <PrixAdd setPage={changePage} id={id} /> : null}
    </Container.Column>
  )
}

export default Administration