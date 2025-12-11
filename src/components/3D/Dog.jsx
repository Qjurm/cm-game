import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Dog({ position = [0, 0, 0], color = '#8B4513' }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      // Slight tail wag animation
      const time = state.clock.getElapsedTime()
      groupRef.current.children[5].rotation.z = Math.sin(time * 3) * 0.3
    }
  })

  return (
    <group ref={groupRef} position={position} scale={0.6}>
      {/* Body */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[0.5, 0.35, 0.7]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.4, 0.45]} castShadow>
        <boxGeometry args={[0.35, 0.3, 0.35]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Snout */}
      <mesh position={[0, 0.35, 0.65]} castShadow>
        <boxGeometry args={[0.2, 0.15, 0.15]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* Ears */}
      <mesh position={[-0.12, 0.55, 0.4]} rotation={[0, 0, -0.3]} castShadow>
        <boxGeometry args={[0.15, 0.2, 0.05]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0.12, 0.55, 0.4]} rotation={[0, 0, 0.3]} castShadow>
        <boxGeometry args={[0.15, 0.2, 0.05]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Tail */}
      <mesh position={[0, 0.4, -0.35]} rotation={[0.5, 0, 0]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Legs - Front Left */}
      <mesh position={[-0.15, 0.1, 0.25]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 0.3, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Legs - Front Right */}
      <mesh position={[0.15, 0.1, 0.25]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 0.3, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Legs - Back Left */}
      <mesh position={[-0.15, 0.1, -0.15]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 0.3, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Legs - Back Right */}
      <mesh position={[0.15, 0.1, -0.15]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 0.3, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 0.35, 0.73]} castShadow>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
    </group>
  )
}

export default Dog
