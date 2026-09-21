import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Properties from './pages/Properties'
import Agents from './pages/Agents'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/agents" element={<Agents />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
