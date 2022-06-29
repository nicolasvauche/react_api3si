import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './layouts/Default'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout component='home' />} />
        <Route path='connexion' element={<Layout component='login' />} />
        <Route path='blog' element={<Layout component='blog' />} />
        <Route path='utilisateurs' element={<Layout component='user' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
