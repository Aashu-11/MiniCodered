import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import Common from '../Common'

const HomePage = lazy(() => import('./pages/interfaces/HomePage'))

const Level_1 = lazy(() => import('./pages/levels/Level_1'))
const Level_2 = lazy(() => import('./pages/levels/Level_2'))


const FinalPage = lazy(() => import('./pages/interfaces/FinalPage'))

const Backstory_1 = lazy(() => import('./pages/backstory/Backstory_Level_1'))

const Backstory_prb1 = lazy(() => import('./pages/backstory/BackStory_prb1'))
const Backstory_prb2 = lazy(() => import('./pages/backstory/Backstory_prb2'))



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Common />}>
          <Route index element={<HomePage />} />
          <Route path="/backstory_1" element={<Backstory_1 />} />
          <Route path="/level_1" element={<Level_1 />} />
          <Route path="/level_2" element={<Level_2 />} />
          <Route path="/backstory_prb1" element={<Backstory_prb1 />} />
          <Route path="/backstory_prb2" element={<Backstory_prb2 />} />
          <Route path="/final" element={<FinalPage />} />

        </Route>
      </Routes>
    </Router>
  )
}

export default App