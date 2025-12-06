import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Carousel({ position = [0, 0, -8] }) {
  const carouselRef = useRef()

  useFrame((state) => {
    if (carouselRef.current) {
      carouselRef.current.rotation.y += 0.005
    }
  })

  return (
    <group position={position}>
      {/* Base Platform */}
      <mesh position={[0, 0.1, 0]} castShadow>
        <cylinderGeometry args={[2.5, 2.8, 0.3, 16]} />
        <meshStandardMaterial color="#8B0000" />
      </mesh>

      {/* Rotating Part */}
      <group ref={carouselRef}>
        {/* Central Pole */}
        <mesh position={[0, 2.5, 0]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 5, 16]} />
          <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Top Roof */}
        <mesh position={[0, 5.2, 0]} castShadow>
          <coneGeometry args={[2.5, 1.5, 16]} />
          <meshStandardMaterial color="#FF1493" />
        </mesh>

        {/* Decorative top */}
        <mesh position={[0, 6.1, 0]} castShadow>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#FFD700" />
        </mesh>

        {/* Carousel Horses/Seats - 8 positions */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const x = Math.cos(angle) * 1.8
          const z = Math.sin(angle) * 1.8
          const yOffset = Math.sin(i * 0.5) * 0.3

          return (
            <group key={i} position={[x, 2 + yOffset, z]}>
              {/* Pole */}
              <mesh position={[0, 0.8, 0]} castShadow>
                <cylinderGeometry args={[0.04, 0.04, 1.6, 8]} />
                <meshStandardMaterial color="#FFD700" />
              </mesh>
              
              {/* Seat/Horse Body */}
              <mesh position={[0, 0, 0]} castShadow>
                <boxGeometry args={[0.3, 0.4, 0.5]} />
                <meshStandardMaterial color={i % 2 === 0 ? '#FF69B4' : '#87CEEB'} />
              </mesh>
            </group>
          )
        })}
      </group>

      {/* Lights around the top */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2
        const x = Math.cos(angle) * 2.3
        const z = Math.sin(angle) * 2.3

        return (
          <mesh key={i} position={[x, 4.8, z]} castShadow>
            <sphereGeometry args={[0.1, 12, 12]} />
            <meshStandardMaterial 
              color={i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#FF1493' : '#00CED1'}
              emissive={i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#FF1493' : '#00CED1'}
              emissiveIntensity={0.8}
            />
          </mesh>
        )
      })}
    </group>
  )
}

export default Carousel
