import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/:id' element={<Project />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
