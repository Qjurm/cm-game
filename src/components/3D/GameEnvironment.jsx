import { useState, useEffect } from 'react'
import useGameStore from '../../store/gameStore'
import FairStand from './FairStand'
import PlayerAvatar from './PlayerAvatar'
import Crowd from './Crowd'
import AnimatedCrowdScene from './AnimatedCrowdScene'
import Floor from './Floor'
import Carousel from './Carousel'
import FairEnvironment from './FairEnvironment'

function GameEnvironment() {
  const { currentScenario, scenarios, avatar, recordChoice, nextScenario } = useGameStore()
  const [selectedStand, setSelectedStand] = useState(null)
  const [standOpen, setStandOpen] = useState(null)
  const [avatarTarget, setAvatarTarget] = useState(null)
  const [startTime, setStartTime] = useState(Date.now())
  
  const scenario = scenarios[currentScenario]

  // Debug logging
  console.log('GameEnvironment Render - Total Scenarios:', scenarios.length, 'Current Scenario:', currentScenario, 'Scenario Type:', scenario?.type, 'Scenario:', scenario)

  // Reset start time when scenario changes
  useEffect(() => {
    setStartTime(Date.now())
    console.log('🎮 New scenario started:', currentScenario, scenario?.type)
  }, [currentScenario])

  // Safety check
  if (!scenario) {
    return null
  }

  // Color mapping for stand colors
  const getColorHex = (colorName) => {
    const colors = {
      'red': '#E74C3C',
      'green': '#2ECC71',
      'blue': '#3498DB'
    }
    return colors[colorName] || colorName
  }

  const handleStandClick = (choice, standPosition) => {
    if (selectedStand) return // Prevent multiple clicks

    const timeToDecide = Date.now() - startTime
    
    // Record the choice
    recordChoice(scenario.id, choice, timeToDecide)
    
    // Mark stand as selected
    setSelectedStand(choice)
    setStandOpen(choice)
    
    // Set avatar target to walk to the stand
    const targetPos = [standPosition[0], 0, standPosition[2] + 1.5]
    setAvatarTarget(targetPos)
  }

  const handleAvatarReachTarget = () => {
    // Wait 3 seconds at the stand, then return to middle
    setTimeout(() => {
      // Set target back to starting position
      setAvatarTarget([0, 0, 5])
    }, 3000)
  }

  const handleAvatarReturnToMiddle = () => {
    // Reset states and move to next scenario
    setSelectedStand(null)
    setStandOpen(null)
    setAvatarTarget(null)
    nextScenario()
  }

  return (
    <group>
      <Floor />
      <FairEnvironment />
      <Carousel />
      
      {/* Player Avatar */}
      {avatar && (
        <PlayerAvatar 
          avatarType={avatar.id} 
          targetPosition={avatarTarget}
          onReachTarget={handleAvatarReachTarget}
          onReturnToMiddle={handleAvatarReturnToMiddle}
        />
      )}
      
      {scenario.type === 'color-choice' && (
        <>
          {/* Left stand */}
          <FairStand 
            position={[-3.5, 0, 0]} 
            color={getColorHex(scenario.colors[0])}
            choice={scenario.colors[0]}
            onStandClick={handleStandClick}
            isSelected={standOpen === scenario.colors[0]}
          />
          
          {/* Right stand */}
          <FairStand 
            position={[3.5, 0, 0]} 
            color={getColorHex(scenario.colors[1])}
            choice={scenario.colors[1]}
            onStandClick={handleStandClick}
            isSelected={standOpen === scenario.colors[1]}
          />
        </>
      )}

      {scenario.type === 'crowd-influence' && scenario.crowdSizes && (
        <>
          {/* Left stand with larger or smaller crowd */}
          <group>
            <FairStand 
              position={[-3.5, 0, 0]} 
              color="#8B4513" 
              choice="left"
              onStandClick={handleStandClick}
              isSelected={standOpen === 'left'}
            />
            <Crowd position={[-3.5, 0, 2.5]} size={scenario.crowdSizes[0]} />
          </group>
          
          {/* Right stand with larger or smaller crowd */}
          <group>
            <FairStand 
              position={[3.5, 0, 0]} 
              color="#8B4513" 
              choice="right"
              onStandClick={handleStandClick}
              isSelected={standOpen === 'right'}
            />
            <Crowd position={[3.5, 0, 2.5]} size={scenario.crowdSizes[1]} />
          </group>
        </>
      )}

      {scenario.type === 'animated-crowd' && scenario.leftStand && scenario.rightStand && (
        <>
          {/* Left stand */}
          <FairStand 
            position={[-3.5, 0, 0]} 
            color="#8B4513" 
            choice="left"
            onStandClick={handleStandClick}
            isSelected={standOpen === 'left'}
          />
          
          {/* Right stand */}
          <FairStand 
            position={[3.5, 0, 0]} 
            color="#8B4513" 
            choice="right"
            onStandClick={handleStandClick}
            isSelected={standOpen === 'right'}
          />

          {/* Animated NPCs arriving at stands */}
          <AnimatedCrowdScene 
            leftStandConfig={scenario.leftStand}
            rightStandConfig={scenario.rightStand}
          />
        </>
      )}
    </group>
  )
}

export default GameEnvironment
