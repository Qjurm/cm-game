import useGameStore from '../store/gameStore'
import { FaUser } from 'react-icons/fa'
import './Instructions.css'

function Instructions() {
  const { setGameStage, userInfo, avatar } = useGameStore()

  const handleStart = () => {
    setGameStage('playing')
  }

  return (
    <div className="instructions-container">
      <div className="instructions-card">
        <div className="header-section">
          <div className="avatar-display" style={{ background: avatar?.color || '#667eea', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: 'white' }}>
            {avatar?.emoji || <FaUser />}
          </div>
          <h1>Game Instructions</h1>
          <p className="welcome-text">Welcome, {userInfo?.name}!</p>
        </div>

        <div className="rules-section">
          <h2>How to Play</h2>
          
          <div className="rule-item">
            <div className="rule-number">1</div>
            <div className="rule-content">
              <h3>Choose a Door</h3>
              <p>You will be presented with different scenarios. In each scenario, you need to choose between two doors.</p>
            </div>
          </div>

          <div className="rule-item">
            <div className="rule-number">2</div>
            <div className="rule-content">
              <h3>Make Your Decision</h3>
              <p>Click on the door you prefer. There are no right or wrong answers - just follow your instinct!</p>
            </div>
          </div>

          <div className="rule-item">
            <div className="rule-number">3</div>
            <div className="rule-content">
              <h3>Take Your Time</h3>
              <p>There's no time limit. However, we encourage you to make decisions naturally without overthinking.</p>
            </div>
          </div>
        </div>
        <button className="start-button" onClick={handleStart}>
          Start Game
        </button>
      </div>
    </div>
  )
}

export default Instructions
