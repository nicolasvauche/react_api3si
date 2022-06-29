import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Loading from '../components/Loading'

const Post = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  
  useEffect(() => {
    const url = 'http://localhost:8080/api/posts'

    axios
      .get(url)
      .then(({ data: response }) => {
        setMessage(response.message)
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
  }, [navigate])

  return (
    <>
      <section>
       {loading && <Loading />}

        {!loading && <h2>{message}</h2>}
      </section>
    </>
  )
}

export default Post
