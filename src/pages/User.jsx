import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Loading from '../components/Loading'
import GridUser from '../components/user/Grid'

const User = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const [message, setMessage] = useState('')
  const token = localStorage.getItem('token')

  useEffect(() => {
    const url = 'http://localhost:8080/api/users'

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(({ data: response }) => {
        setItems(response['hydra:member'])
      })
      .catch(error => {
        switch (error.response.status) {
          case 401:
            setMessage('Accès interdit')
            break
          case 404:
            setMessage('Endpoint introuvable')
            break
          default:
            setMessage(error.response.message)
            break
        }
        navigate('/connexion')
      })

    setLoading(false)
  }, [navigate, token])

  return (
    <>
      <section>
        {loading && <Loading />}

        {!loading && (
          <>
            <h2>{message}</h2>

            <GridUser items={items} />
          </>
        )}
      </section>
    </>
  )
}

export default User
