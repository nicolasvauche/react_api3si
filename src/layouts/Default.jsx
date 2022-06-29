import { createContext, useEffect, useState } from 'react'

import Header from './Header'
import Homepage from '../pages/Homepage'

import './Default.scss'
import Login from '../pages/Login'
import Post from '../pages/Post'
import User from '../pages/User'
import Navigation from './Navigation'

export const TitleContext = createContext()

const LayoutDefault = ({ component }) => {
  const [title, setTitle] = useState(null)

  useEffect(() => {
    // Dev mode only
    console.clear()

    switch (component) {
      case 'home':
        setTitle('Bienvenue chez 3Si !')
        break
        case 'login':
          setTitle('Connectez-vous')
          break
      case 'blog':
        setTitle('Le Blog de 3Si')
        break
        case 'user':
          setTitle('Les utilisateurs')
          break
      default:
        break
    }
  }, [component])

  return (
    <>
      <TitleContext.Provider value={title}>
        <Header />
      </TitleContext.Provider>

      <Navigation />

      <main className='app-main'>
        {component === 'home' && <Homepage />}
        {component === 'login' && <Login />}
        {component === 'blog' && <Post />}
        {component === 'user' && <User />}
      </main>
    </>
  )
}

export default LayoutDefault
