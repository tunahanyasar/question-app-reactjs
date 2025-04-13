import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import './App.css'

function App() {
  const [score, setScore] = useState({
    correct: 0,
    wrong: 0,
    empty: 0
  })

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz setScore={setScore} />} />
          <Route path="/result" element={<Result score={score} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
