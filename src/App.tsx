import { useState } from "react"
import { Container, Form, Text } from "./components/atoms"
import { updateReservation } from "./services/Reservations"

function App() {

  const [data, setData] = useState()

  const click = async () => {
    const z = {
    "tarif": 635,
    "debut": new Date("2025-05-05T12:30:00Z"),
    "fin": new Date("2025-05-06T12:30:00Z"),
    "nbPersonne": 8
}
    const x = await updateReservation(z, 12)
    setData(x)
  }

  return (
    <Container.Column>
      <Text.Title>Le gite d'auzon</Text.Title>
      <Form.Button onClick={()=> click()}>
        Clique
      </Form.Button>
      <pre>{JSON.stringify(data, null, 3)}</pre>
    </Container.Column>
  )
}

export default App
