import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Loading from '../components/Loading'
import GridPost from '../components/post/Grid'

const Post = () => {
  const url = 'http://localhost:8080/api/posts'
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
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
            navigate('/connexion')
            break
          case 404:
            setMessage('Endpoint introuvable')
            break
          default:
            setMessage(error.message)
            break
        }
      })

    setLoading(false)
  }, [navigate, token])

  return (
    <>
      <section>
        {loading && <Loading />}

        {!loading && (
          <>
            <h2>Liste des articles</h2>

            {message && <p className='alert alert-error'>{message}</p>}

            <GridPost items={items} />
          </>
        )}
      </section>
    </>
  )
}

export default Post
