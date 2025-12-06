import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

function Door({ position, color, choice, onDoorClick, isOpen = false }) {
  const doorRef = useRef()
  const [hovered, setHovered] = useState(false)
  const targetRotation = isOpen ? Math.PI / 2 : 0

  useFrame(() => {
    if (doorRef.current) {
      // Smooth door opening animation
      doorRef.current.rotation.y += (targetRotation - doorRef.current.rotation.y) * 0.1
    }
  })

  const handleClick = () => {
    if (!isOpen && onDoorClick) {
      onDoorClick(choice, position)
    }
  }

  return (
    <group position={position}>
      {/* Door frame */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[1.6, 3.2, 0.3]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      {/* Door - pivots from the left side */}
      <group position={[-0.75, 1.5, 0.1]}>
        <group ref={doorRef} position={[0.75, 0, 0]}>
          <mesh
            position={[0, 0, 0]}
            onClick={handleClick}
            onPointerOver={() => !isOpen && setHovered(true)}
            onPointerOut={() => setHovered(false)}
            castShadow
          >
            <boxGeometry args={[1.5, 3, 0.2]} />
            <meshStandardMaterial 
              color={color}
              emissive={hovered ? color : '#000000'}
              emissiveIntensity={hovered ? 0.3 : 0}
              metalness={0.3}
              roughness={0.7}
            />
          </mesh>

          {/* Door handle */}
          <mesh position={[0.5, 0, 0.15]} castShadow>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#ffd700" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      </group>
    </group>
  )
}

export default Door
