import { useState, useEffect } from 'react'
import useGameStore from '../../store/gameStore'
import FairStand from './FairStand'
import PlayerAvatar from './PlayerAvatar'
import Crowd from './Crowd'
import AnimatedCrowdScene from './AnimatedCrowdScene'
import Floor from './Floor'
import Carousel from './Carousel'
import FairEnvironment from './FairEnvironment'
import FerrisWheel from './FerrisWheel'
import AnimatedNPC from './AnimatedNPC'
import Dog from './Dog'
import Cat from './Cat'

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
    setSelectedStand(null)
    setStandOpen(null)
    setAvatarTarget(null)
    console.log('🎮 New scenario started:', currentScenario, 'Type:', scenario?.type, 'Full scenario:', scenario)
  }, [currentScenario, scenario?.type])

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
    console.log('🎯 handleStandClick called:', { choice, standPosition, selectedStand, scenario: scenario.id })
    if (selectedStand) return // Prevent multiple clicks

    const timeToDecide = Date.now() - startTime
    
    // Record the choice
    console.log('📝 Recording choice:', { scenarioId: scenario.id, choice, timeToDecide })
    recordChoice(scenario.id, choice, timeToDecide)
    
    // Mark stand as selected
    setSelectedStand(choice)
    setStandOpen(choice)
    
    // Set avatar target to walk to the stand
    const targetPos = [standPosition[0], 0, standPosition[2] + 1.5]
    console.log('👤 Setting avatar target:', targetPos)
    setAvatarTarget(targetPos)
  }

  const handleFerrisWheelClick = (choice, wheelPosition) => {
    if (selectedStand) return // Prevent multiple clicks

    const timeToDecide = Date.now() - startTime
    
    // Record the choice
    recordChoice(scenario.id, choice, timeToDecide)
    
    // Mark wheel as selected
    setSelectedStand(choice)
    
    // Set avatar target to walk to the ferris wheel
    const targetPos = [wheelPosition[0], 0, wheelPosition[2] + 3]
    setAvatarTarget(targetPos)
  }

  const handleAvatarReachTarget = () => {
    console.log('🎯 Avatar reached target, waiting 1 second...')
    // Wait 1 second at the stand, then return to middle
    setTimeout(() => {
      console.log('🔙 Setting avatar target back to starting position')
      // Set target back to starting position
      setAvatarTarget([0, 0, 3.5])
    }, 1000)
  }

  const handleAvatarReturnToMiddle = () => {
    console.log('🏁 Avatar returned to middle, moving to next scenario')
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
      
      {/* Background Decorative Stands - 6 stands (3 per side) */}
      <FairStand position={[-8, 0, -5]} color="#FF6347" isInteractive={false} />
      <FairStand position={[-8, 0, -7]} color="#4169E1" isInteractive={false} />
      <FairStand position={[-8, 0, -9]} color="#32CD32" isInteractive={false} />
      
      <FairStand position={[8, 0, -5]} color="#FFD700" isInteractive={false} />
      <FairStand position={[8, 0, -7]} color="#FF69B4" isInteractive={false} />
      <FairStand position={[8, 0, -9]} color="#9370DB" isInteractive={false} />

      {/* Background NPCs - 16 NPCs distributed across the scene */}
      <AnimatedNPC startPosition={[-7, 0, -4]} targetPosition={[-7, 0, -4]} delay={0} color="hsl(180, 70%, 60%)" />
      <AnimatedNPC startPosition={[-6, 0, -6]} targetPosition={[-6, 0, -6]} delay={0} color="hsl(200, 70%, 60%)" />
      <AnimatedNPC startPosition={[-7.5, 0, -8]} targetPosition={[-7.5, 0, -8]} delay={0} color="hsl(220, 70%, 60%)" />
      <AnimatedNPC startPosition={[-8.5, 0, -6.5]} targetPosition={[-8.5, 0, -6.5]} delay={0} color="hsl(240, 70%, 60%)" />
      
      <AnimatedNPC startPosition={[7, 0, -4]} targetPosition={[7, 0, -4]} delay={0} color="hsl(0, 70%, 60%)" />
      <AnimatedNPC startPosition={[6, 0, -6]} targetPosition={[6, 0, -6]} delay={0} color="hsl(20, 70%, 60%)" />
      <AnimatedNPC startPosition={[7.5, 0, -8]} targetPosition={[7.5, 0, -8]} delay={0} color="hsl(40, 70%, 60%)" />
      <AnimatedNPC startPosition={[8.5, 0, -6.5]} targetPosition={[8.5, 0, -6.5]} delay={0} color="hsl(60, 70%, 60%)" />
      
      <AnimatedNPC startPosition={[-9, 0, 2]} targetPosition={[-9, 0, 2]} delay={0} color="hsl(80, 70%, 60%)" />
      <AnimatedNPC startPosition={[-10, 0, 0]} targetPosition={[-10, 0, 0]} delay={0} color="hsl(100, 70%, 60%)" />
      <AnimatedNPC startPosition={[-8, 0, 1]} targetPosition={[-8, 0, 1]} delay={0} color="hsl(120, 70%, 60%)" />
      <AnimatedNPC startPosition={[-9.5, 0, -2]} targetPosition={[-9.5, 0, -2]} delay={0} color="hsl(140, 70%, 60%)" />
      
      <AnimatedNPC startPosition={[9, 0, 2]} targetPosition={[9, 0, 2]} delay={0} color="hsl(260, 70%, 60%)" />
      <AnimatedNPC startPosition={[10, 0, 0]} targetPosition={[10, 0, 0]} delay={0} color="hsl(280, 70%, 60%)" />
      <AnimatedNPC startPosition={[8, 0, 1]} targetPosition={[8, 0, 1]} delay={0} color="hsl(300, 70%, 60%)" />
      <AnimatedNPC startPosition={[9.5, 0, -2]} targetPosition={[9.5, 0, -2]} delay={0} color="hsl(320, 70%, 60%)" />

      {/* Dogs - 4 dogs distributed across the scene */}
      <Dog position={[-6.5, 0, 3]} color="#8B4513" />
      <Dog position={[6.5, 0, 2.5]} color="#D2691E" />
      <Dog position={[-9, 0, -3]} color="#A0522D" />
      <Dog position={[8.5, 0, -3.5]} color="#654321" />

      {/* Cats - 6 cats distributed across the scene */}
      <Cat position={[-7.5, 0, 2]} color="#FFB6C1" />
      <Cat position={[7, 0, 3]} color="#FFA07A" />
      <Cat position={[-8.5, 0, -1]} color="#F0E68C" />
      <Cat position={[9, 0, -1.5]} color="#DDA0DD" />
      <Cat position={[-10.5, 0, -4]} color="#D3D3D3" />
      <Cat position={[10, 0, -4.5]} color="#FFE4B5" />
      
      {/* Player Avatar */}
      {avatar && (
        <PlayerAvatar 
          key={`player-avatar-${currentScenario}`}
          avatarType={avatar.id} 
          targetPosition={avatarTarget}
          onReachTarget={handleAvatarReachTarget}
          onReturnToMiddle={handleAvatarReturnToMiddle}
        />
      )}
      
      {scenario.type === 'color-choice' && scenario.colors && scenario.colors.length >= 2 && (
        <>
          {/* Left stand */}
          <FairStand 
            key={`fair-stand-${currentScenario}-left`}
            position={[-3.5, 0, -1]} 
            color={getColorHex(scenario.colors[0])}
            choice={scenario.colors[0]}
            onStandClick={handleStandClick}
            isSelected={standOpen === scenario.colors[0]}
          />
          
          {/* Right stand */}
          <FairStand 
            key={`fair-stand-${currentScenario}-right`}
            position={[3.5, 0, -1]} 
            color={getColorHex(scenario.colors[1])}
            choice={scenario.colors[1]}
            onStandClick={handleStandClick}
            isSelected={standOpen === scenario.colors[1]}
          />
        </>
      )}

      {scenario.type === 'crowd-influence' && scenario.crowdSizes && scenario.crowdSizes.length >= 2 && (
        <>
          {/* Left stand with larger or smaller crowd */}
          <group key={`crowd-left-${currentScenario}`}>
            <FairStand 
              position={[-3.5, 0, -1]} 
              color="#8B4513" 
              choice="left"
              onStandClick={handleStandClick}
              isSelected={standOpen === 'left'}
            />
            <Crowd position={[-3.5, 0, 1.5]} size={scenario.crowdSizes[0]} />
          </group>
          
          {/* Right stand with larger or smaller crowd */}
          <group key={`crowd-right-${currentScenario}`}>
            <FairStand 
              position={[3.5, 0, -1]} 
              color="#8B4513" 
              choice="right"
              onStandClick={handleStandClick}
              isSelected={standOpen === 'right'}
            />
            <Crowd position={[3.5, 0, 1.5]} size={scenario.crowdSizes[1]} />
          </group>
        </>
      )}

      {scenario.type === 'animated-crowd' && scenario.leftStand && scenario.rightStand && scenario.leftStand.initialCount !== undefined && scenario.rightStand.initialCount !== undefined && (
        <>
          {/* Left stand */}
          <FairStand 
            key={`animated-stand-${currentScenario}-left`}
            position={[-3.5, 0, -1]} 
            color="#8B4513" 
            choice="left"
            onStandClick={handleStandClick}
            isSelected={standOpen === 'left'}
          />
          
          {/* Right stand */}
          <FairStand 
            key={`animated-stand-${currentScenario}-right`}
            position={[3.5, 0, -1]} 
            color="#8B4513" 
            choice="right"
            onStandClick={handleStandClick}
            isSelected={standOpen === 'right'}
          />

          {/* Animated NPCs arriving at stands */}
          <AnimatedCrowdScene 
            key={`animated-scene-${currentScenario}`}
            leftStandConfig={scenario.leftStand}
            rightStandConfig={scenario.rightStand}
          />
        </>
      )}

      {scenario.type === 'ferris-wheel-queue' && scenario.leftWheel && scenario.rightWheel && scenario.leftWheel.queueSize !== undefined && scenario.rightWheel.queueSize !== undefined && (
        <>
          {/* Left ferris wheel with queue */}
          <group key={`ferris-left-${currentScenario}`}>
            <FerrisWheel 
              position={[-5, 0, -2]} 
              onClick={() => handleFerrisWheelClick('left', [-5, 0, -2])}
              isClickable={!selectedStand}
            />
            {/* Queue of NPCs for left wheel */}
            {[...Array(scenario.leftWheel.queueSize)].map((_, i) => {
              const row = Math.floor(i / 2)
              const col = i % 2
              return (
                <AnimatedNPC
                  key={`left-npc-${i}`}
                  startPosition={[-5 + (col - 0.5) * 0.6, 0, 1 + row * 0.6]}
                  targetPosition={[-5 + (col - 0.5) * 0.6, 0, 1 + row * 0.6]}
                  delay={0}
                  color={`hsl(${(i * 30) % 360}, 70%, 60%)`}
                />
              )
            })}
          </group>

          {/* Right ferris wheel with queue */}
          <group key={`ferris-right-${currentScenario}`}>
            <FerrisWheel 
              position={[5, 0, -2]} 
              onClick={() => handleFerrisWheelClick('right', [5, 0, -2])}
              isClickable={!selectedStand}
            />
            {/* Queue of NPCs for right wheel */}
            {[...Array(scenario.rightWheel.queueSize)].map((_, i) => {
              const row = Math.floor(i / 2)
              const col = i % 2
              return (
                <AnimatedNPC
                  key={`right-npc-${i}`}
                  startPosition={[5 + (col - 0.5) * 0.6, 0, 1 + row * 0.6]}
                  targetPosition={[5 + (col - 0.5) * 0.6, 0, 1 + row * 0.6]}
                  delay={0}
                  color={`hsl(${(i * 30 + 180) % 360}, 70%, 60%)`}
                />
              )
            })}
          </group>
        </>
      )}
    </group>
  )
}

export default GameEnvironment
