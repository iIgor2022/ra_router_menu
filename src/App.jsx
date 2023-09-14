import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import DriftPage from './components/driftPage'
import ForzaPage from './components/forzaPage'
import HomePage from './components/homePage'
import Menu from './components/menu'
import TimeAttackPage from './components/timeAttackPage'

export default function App() {
  return (
    <Router>
      <div>
        <Menu/>
        <div className='page'>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/drift" element={<DriftPage/>}/>
            <Route path="/timeattack" element={<TimeAttackPage/>}/>
            <Route path="/forza" element={<ForzaPage/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}