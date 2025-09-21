import React from 'react'
import { login } from '../../services/Users'

const Login = () => {

  const [formData, setFormData] = React.useState({
    mail: "",
    mdp: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await login(formData.mail, formData.mdp)
    if (result && result.access_token) {
      localStorage.setItem("token", result.access_token)
      window.location.reload()
    } else {
      alert("Échec de la connexion. Veuillez vérifier vos identifiants.")
    }
  }

  return (
    <div className="sign-up-form">
      <h1>Se connecter</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" className="input-box" placeholder="Votre e-mail" name="mail" required onChange={handleInputChange} />
        <input type="password" className="input-box" placeholder="Votre mot de passe" name="mdp" required onChange={handleInputChange} />
        <button type="submit" className="sign-btn"> Connexion </button>
      </form>
    </div>
  )
}

export default Login