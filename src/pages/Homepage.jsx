import { useEffect, useState } from 'react'
import axios from 'axios'

import Loading from '../components/Loading'

const Homepage = () => {
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const url = 'http://localhost:8080'

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
      })

    setLoading(false)
  }, [])

  return (
    <>
      <section>
        {loading && <Loading />}

        {!loading && <h2>{message}</h2>}
      </section>
    </>
  )
}

export default Homepage
