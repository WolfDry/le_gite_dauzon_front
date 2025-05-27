import { useState } from "react"
import { Container, Form, Text } from "./components/atoms"
import { deleteClient } from "./services/Clients"

function App() {

  const [data, setData] = useState()

  const click = async () => {
    const z = {
        "email": "felix.ravella@gmail.com",
        "telephone": "0123456789"
    }
    const x = await deleteClient(14)
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
