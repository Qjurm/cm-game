import { useState, useEffect } from 'react'
import AnimatedNPC from './AnimatedNPC'

function AnimatedCrowdScene({ leftStandConfig, rightStandConfig }) {
  const [npcs, setNpcs] = useState([])

  useEffect(() => {
    const npcList = []
    let npcId = 0

    // Left stand - initial NPCs (already there)
    for (let i = 0; i < leftStandConfig.initialCount; i++) {
      npcList.push({
        id: npcId++,
        startPosition: [-3.5 + (i - 1) * 0.5, 0, 2.5],
        targetPosition: [-3.5 + (i - 1) * 0.5, 0, 2.5],
        delay: 0,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`
      })
    }

    // Right stand - initial NPC (already there)
    for (let i = 0; i < rightStandConfig.initialCount; i++) {
      npcList.push({
        id: npcId++,
        startPosition: [3.5, 0, 2.5],
        targetPosition: [3.5, 0, 2.5],
        delay: 0,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`
      })
    }

    // Right stand - arriving NPCs
    let currentPosition = rightStandConfig.initialCount
    rightStandConfig.arriving.forEach((wave) => {
      for (let i = 0; i < wave.count; i++) {
        const offsetX = Math.floor(currentPosition / 3) * 0.5 - 0.5
        const offsetZ = (currentPosition % 3) * 0.5
        npcList.push({
          id: npcId++,
          startPosition: [8, 0, 4],
          targetPosition: [3.5 + offsetX, 0, 2.5 + offsetZ],
          delay: wave.delay,
          color: `hsl(${Math.random() * 360}, 70%, 60%)`
        })
        currentPosition++
      }
    })

    setNpcs(npcList)
  }, [leftStandConfig, rightStandConfig])

  return (
    <group>
      {npcs.map((npc) => (
        <AnimatedNPC
          key={npc.id}
          startPosition={npc.startPosition}
          targetPosition={npc.targetPosition}
          delay={npc.delay}
          color={npc.color}
        />
      ))}
    </group>
  )
}

export default AnimatedCrowdScene
