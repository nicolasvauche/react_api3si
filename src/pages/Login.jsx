import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.scss'

const Login = () => {
  const url = 'http://localhost:8080/api/login'
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [token, setToken] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    axios
      .post(url, {
        email: userEmail,
        password: userPassword
      })
      .then(response => {
        localStorage.setItem('token', response.data.token)
        setToken(response.data.token)
        navigate('/')
      })
      .catch(e => {
        console.log(e.code)
      })
  }

  return (
    <section>
      <h2>Connexion</h2>

      <form action='' className='app-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='useremail'>Email :</label>
          <input
            type='email'
            id='useremail'
            className='form-control'
            value={userEmail}
            onChange={e => setUserEmail(e.target.value)}
            required
            autoFocus
          />
        </div>

        <div className='form-group'>
          <label htmlFor='userpassword'>Password :</label>
          <input
            type='password'
            id='userpassword'
            className='form-control'
            value={userPassword}
            onChange={e => setUserPassword(e.target.value)}
            required
          />
        </div>

        <button type='submit' className='app-button'>
          Connexion
        </button>
      </form>
    </section>
  )
}

export default Login
