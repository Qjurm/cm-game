import { useEffect, useState } from 'react'
import useGameStore from '../store/gameStore'
import './UI.css'

function UI() {
  const { currentScenario, scenarios, gameStage, choices, exportData, resetGame, userInfo } = useGameStore()

  // Debug logging
  console.log('UI Render - Scenarios:', scenarios.length, 'Current:', currentScenario)

  const handleDownloadData = () => {
    const data = exportData()
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `crowd-study-${data.participantId}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  if (gameStage === 'complete') {
    return (
      <div className="ui-overlay">
        <div className="ui-panel complete">
          <h2>Study Complete!</h2>
          <p>Thank you for participating, {userInfo?.name}!</p>
          <div className="summary">
            <h3>Your Choices:</h3>
            {choices.map((choice, index) => (
              <p key={index}>
                Scenario {choice.scenarioId}: <strong>{choice.choice}</strong> door
                <span className="time-badge">({(choice.timeToDecide / 1000).toFixed(1)}s)</span>
              </p>
            ))}
          </div>
          <div className="button-group">
            <button onClick={handleDownloadData}>Download Data</button>
            <button onClick={resetGame}>Restart</button>
          </div>
        </div>
      </div>
    )
  }

  const scenario = scenarios[currentScenario]

  return (
    <div className="ui-overlay">
      <div className="ui-panel">
        <div className="scenario-info">
          <h3>Scenario {currentScenario + 1} of {scenarios.length}</h3>
          <p>{scenario.question}</p>
        </div>
        <div className="instructions">
          <p>Click on a stand to make your choice</p>
        </div>
      </div>
    </div>
  )
}

export default UI
