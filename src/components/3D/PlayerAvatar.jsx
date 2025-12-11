import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import Avatar3D from './Avatar3D'

function PlayerAvatar({ avatarType, targetPosition, onReachTarget, onReturnToMiddle }) {
  const groupRef = useRef()
  const [isWalking, setIsWalking] = useState(false)
  const [currentPosition, setCurrentPosition] = useState([0, 0, 3.5])
  const [isReturningToMiddle, setIsReturningToMiddle] = useState(false)
  const walkSpeed = 0.0375

  useEffect(() => {
    if (targetPosition) {
      setIsWalking(true)
    } else {
      // Reset to starting position when targetPosition is null
      setIsWalking(false)
      setCurrentPosition([0, 0, 3.5])
      setIsReturningToMiddle(false)
      if (groupRef.current) {
        groupRef.current.position.set(0, 0, 3.5)
      }
    }
  }, [targetPosition])

  useFrame(() => {
    if (!groupRef.current || !isWalking || !targetPosition) return

    const [currentX, currentY, currentZ] = currentPosition
    const [targetX, targetY, targetZ] = targetPosition

    // Calculate distance
    const dx = targetX - currentX
    const dz = targetZ - currentZ
    const distance = Math.sqrt(dx * dx + dz * dz)

    // Check if reached target
    if (distance < 0.1) {
      setIsWalking(false)
      setCurrentPosition([targetX, targetY, targetZ])
      groupRef.current.position.set(targetX, targetY, targetZ)
      
      // Check if we're returning to middle position
      if (targetX === 0 && targetZ === 3.5 && isReturningToMiddle) {
        setIsReturningToMiddle(false)
        if (onReturnToMiddle) {
          onReturnToMiddle()
        }
      } else if (!isReturningToMiddle && !(targetX === 0 && targetZ === 3.5)) {
        // Just reached the stand (but not the starting position)
        setIsReturningToMiddle(true)
        if (onReachTarget) {
          onReachTarget()
        }
      }
      return
    }

    // Move towards target
    const moveX = (dx / distance) * walkSpeed
    const moveZ = (dz / distance) * walkSpeed

    const newX = currentX + moveX
    const newZ = currentZ + moveZ

    setCurrentPosition([newX, currentY, newZ])
    groupRef.current.position.set(newX, currentY, newZ)

    // Rotate to face movement direction
    const angle = Math.atan2(dx, dz)
    groupRef.current.rotation.y = angle

    // Simple walking animation (bob up and down)
    const bobAmount = Math.sin(Date.now() * 0.01) * 0.05
    groupRef.current.position.y = currentY + bobAmount
  })

  return (
    <group ref={groupRef} position={currentPosition}>
      <Avatar3D avatarType={avatarType} scale={0.9} />
    </group>
  )
}

export default PlayerAvatar
