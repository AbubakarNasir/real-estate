import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
