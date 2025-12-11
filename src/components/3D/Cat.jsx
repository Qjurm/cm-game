import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Cat({ position = [0, 0, 0], color = '#FFB6C1' }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      // Slight tail sway animation
      const time = state.clock.getElapsedTime()
      groupRef.current.children[5].rotation.y = Math.sin(time * 2) * 0.4
    }
  })

  return (
    <group ref={groupRef} position={position} scale={0.5}>
      {/* Body */}
      <mesh position={[0, 0.25, 0]} castShadow>
        <boxGeometry args={[0.4, 0.3, 0.6]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.35, 0.4]} castShadow>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Snout area */}
      <mesh position={[0, 0.3, 0.52]} castShadow>
        <sphereGeometry args={[0.1, 12, 12]} />
        <meshStandardMaterial color="#FFF" />
      </mesh>

      {/* Ears - pointed */}
      <mesh position={[-0.12, 0.5, 0.35]} rotation={[0, 0, -0.4]} castShadow>
        <coneGeometry args={[0.1, 0.2, 4]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0.12, 0.5, 0.35]} rotation={[0, 0, 0.4]} castShadow>
        <coneGeometry args={[0.1, 0.2, 4]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Tail - curved up */}
      <mesh position={[0, 0.35, -0.3]} rotation={[0.8, 0, 0]} castShadow>
        <cylinderGeometry args={[0.03, 0.04, 0.4, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Legs - Front Left */}
      <mesh position={[-0.12, 0.08, 0.2]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.25, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Legs - Front Right */}
      <mesh position={[0.12, 0.08, 0.2]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.25, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Legs - Back Left */}
      <mesh position={[-0.12, 0.08, -0.15]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.25, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Legs - Back Right */}
      <mesh position={[0.12, 0.08, -0.15]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.25, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.08, 0.38, 0.5]} castShadow>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.08, 0.38, 0.5]} castShadow>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 0.32, 0.56]} castShadow>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial color="#FF69B4" />
      </mesh>
    </group>
  )
}

export default Cat
