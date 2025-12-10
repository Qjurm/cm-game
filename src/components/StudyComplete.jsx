import { useEffect } from 'react'
import useGameStore from '../store/gameStore'
import './StudyComplete.css'
import { supabase } from '../supabase' // <--- Import the new file

function StudyComplete() {
  const { userInfo, avatar, choices, resetGame, participantId } = useGameStore()

  useEffect(() => {
    const saveData = async () => {
      // Prepare the data object (same as you had before)
      const dataToSave = {
        participantId: participantId,
        participant: userInfo,
        avatar: avatar,
        choices: choices,
        completedAt: new Date().toISOString()
      }
      
      // --- NEW SUPABASE SAVING LOGIC ---
      try {
        // We insert directly into the 'study_results' table in your database
        const { error } = await supabase
          .from('study_results') 
          .insert({ 
             filename: `study-${participantId}.json`, 
             data: dataToSave // Supabase will store this JSON automatically
          })

        if (error) throw error
        console.log('✅ Study data saved to Supabase!')
        
      } catch (error) {
        console.error('❌ Error saving study data:', error.message)
      }
    }
    
    saveData()
  }, []) // Empty dependency array means this runs once when component loads

  // ... rest of your component (handleRestart, return statement, etc.)

  const handleRestart = () => {
    if (window.confirm('Are you sure you want to restart? This will clear all current data.')) {
      resetGame()
    }
  }

  return (
    <div className="study-complete-container">
      <div className="study-complete-card">
        <div className="completion-icon">✅</div>
        <h1>Study Complete!</h1>
        <p className="thank-you-message">
          Thank you, {userInfo?.name}, for participating in this study!
        </p>
        
        <div className="summary-section">
          <h2>Summary</h2>
          <div className="summary-item">
            <span className="summary-label">Participant:</span>
            <span className="summary-value">{userInfo?.name}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Age:</span>
            <span className="summary-value">{userInfo?.age}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Avatar:</span>
            <span className="summary-value">{avatar?.name}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Scenarios Completed:</span>
            <span className="summary-value">{choices.length}</span>
          </div>
        </div>

        <div className="choices-section">
          <h3>Your Choices</h3>
          <div className="choices-list">
            {choices.map((choice, index) => (
              <div key={index} className="choice-item">
                <span className="choice-number">Scenario {choice.scenarioId}</span>
                <span className="choice-value">{choice.choice}</span>
                <span className="choice-time">{(choice.timeToDecide / 1000).toFixed(1)}s</span>
              </div>
            ))}
          </div>
        </div>

        <div className="action-buttons">
          <button className="restart-btn" onClick={handleRestart}>
            🔄 Restart Study
          </button>
        </div>

        <p className="footer-note">
          Your study data has been automatically saved. Thank you for participating!
        </p>
      </div>
    </div>
  )
}

export default StudyComplete
