import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

function AnimatedNPC({ startPosition, targetPosition, delay = 0, color }) {
  const groupRef = useRef()
  const [isWalking, setIsWalking] = useState(false)
  const [currentPosition, setCurrentPosition] = useState(startPosition)
  const [hasStarted, setHasStarted] = useState(false)
  const walkSpeed = 0.02

  useEffect(() => {
    // Start walking after delay
    const timer = setTimeout(() => {
      setHasStarted(true)
      setIsWalking(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useFrame(() => {
    if (!groupRef.current || !isWalking || !hasStarted) return

    const [currentX, currentY, currentZ] = currentPosition
    const [targetX, targetY, targetZ] = targetPosition

    // Calculate distance
    const dx = targetX - currentX
    const dz = targetZ - currentZ
    const distance = Math.sqrt(dx * dx + dz * dz)

    // Check if reached target
    if (distance < 0.1) {
      setIsWalking(false)
      groupRef.current.position.set(targetX, targetY, targetZ)
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
    const bobAmount = Math.sin(Date.now() * 0.01) * 0.03
    groupRef.current.position.y = currentY + bobAmount
  })

  return (
    <group ref={groupRef} position={currentPosition} scale={1.2}>
      {/* Head */}
      <mesh position={[0, 1.35, 0]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>
      
      {/* Neck */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <cylinderGeometry args={[0.07, 0.08, 0.2, 8]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>
      
      {/* Body/Torso */}
      <mesh position={[0, 0.95, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.15, 0.6, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.18, 0.95, 0]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.5, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0.18, 0.95, 0]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.5, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.06, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.8, 8]} />
        <meshStandardMaterial color="#2C3E50" />
      </mesh>
      <mesh position={[0.06, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.8, 8]} />
        <meshStandardMaterial color="#2C3E50" />
      </mesh>
    </group>
  )
}

export default AnimatedNPC
