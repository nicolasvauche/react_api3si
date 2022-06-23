import Homepage from '../pages/Homepage'

const LayoutDefault = ({ component }) => {
  return (
    <>
      <header className='app-header'>Header</header>

      <nav className='app-navigation'>Nav</nav>

      <main className='app-main'>{component === 'home' && <Homepage />}</main>
    </>
  )
}

export default LayoutDefault
