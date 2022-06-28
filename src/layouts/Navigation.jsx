import { NavLink } from "react-router-dom"

import './Navigation.scss'

const Navigation = () => {
return (
    <nav className='app-navigation'>
        <NavLink to='/'>
            Home
        </NavLink>

        <NavLink to='/blog'>
            Blog
        </NavLink>
    </nav>
)
}

export default Navigation