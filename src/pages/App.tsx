import { HomePage } from '../containers/HomePage'
import { AboutPage } from '../containers/AboutPage'
import { Route, Routes } from 'react-router'

import '../styles/App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
  )
}

export default App
