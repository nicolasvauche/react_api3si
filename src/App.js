import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './layouts/Default'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout component='home' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
