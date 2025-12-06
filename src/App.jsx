import { useState } from 'react'
import Scene from './components/Scene'
import UI from './components/UI'
import RegistrationForm from './components/RegistrationForm'
import AvatarSelection from './components/AvatarSelection'
import Instructions from './components/Instructions'
import StudyComplete from './components/StudyComplete'
import useGameStore from './store/gameStore'
import './App.css'

function App() {
  const { gameStage } = useGameStore()

  // Render based on game stage
  if (gameStage === 'registration') {
    return <RegistrationForm />
  }

  if (gameStage === 'avatar-selection') {
    return <AvatarSelection />
  }

  if (gameStage === 'instructions') {
    return <Instructions />
  }

  if (gameStage === 'complete') {
    return <StudyComplete />
  }

  // Playing stage shows the 3D scene
  return (
    <div className="app">
      <Scene />
      <UI />
    </div>
  )
}

export default App
