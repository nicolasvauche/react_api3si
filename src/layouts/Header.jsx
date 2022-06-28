import { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { TitleContext } from './Default'

import './Header.scss'

import Logo from '../assets/img/logo.png'

const Header = () => {
  const title = useContext(TitleContext)

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <header className='app-header'>
      <NavLink to='/' className='app-logo'>
        <img src={Logo} alt='Logo 3Si' />
      </NavLink>

      <h1>{title}</h1>
    </header>
  )
}

export default Header
