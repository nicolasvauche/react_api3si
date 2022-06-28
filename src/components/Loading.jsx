import Logo from '../assets/img/logo.png'

import './Loading.scss'

const Laoding = () => {
  return (
    <div className='app-loading'>
      <p>
        <img src={Logo} alt='Blog 3Si' />
        <span>…</span>
      </p>
    </div>
  )
}

export default Laoding
