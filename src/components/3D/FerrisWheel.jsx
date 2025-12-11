import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function FerrisWheel({ position = [0, 0, 0], onClick, isClickable = true }) {
  const wheelRef = useRef()

  useFrame(() => {
    if (wheelRef.current) {
      wheelRef.current.rotation.z += 0.003
    }
  })

  const handleClick = (e) => {
    if (isClickable && onClick) {
      e.stopPropagation()
      onClick()
    }
  }

  return (
    <group position={position} onClick={handleClick}>
      {/* Base Support Structure */}
      <group>
        {/* Left support leg */}
        <mesh position={[-1.5, 1.5, 0]} castShadow>
          <boxGeometry args={[0.3, 3, 0.3]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        
        {/* Right support leg */}
        <mesh position={[1.5, 1.5, 0]} castShadow>
          <boxGeometry args={[0.3, 3, 0.3]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>

        {/* Top crossbeam */}
        <mesh position={[0, 3, 0]} castShadow>
          <boxGeometry args={[3.3, 0.2, 0.3]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
      </group>

      {/* Rotating Ferris Wheel */}
      <group ref={wheelRef} position={[0, 3, 0]}>
        {/* Main wheel rim - outer ring */}
        <mesh rotation={[0, 0, 0]} castShadow>
          <torusGeometry args={[2, 0.15, 16, 32]} />
          <meshStandardMaterial color="#DC143C" metalness={0.5} roughness={0.3} />
        </mesh>

        {/* Center hub */}
        <mesh castShadow>
          <cylinderGeometry args={[0.3, 0.3, 0.4, 16]} />
          <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Spokes */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const x = Math.cos(angle) * 1
          const y = Math.sin(angle) * 1

          return (
            <mesh
              key={`spoke-${i}`}
              position={[x, y, 0]}
              rotation={[0, 0, angle]}
              castShadow
            >
              <boxGeometry args={[0.08, 2, 0.08]} />
              <meshStandardMaterial color="#4169E1" />
            </mesh>
          )
        })}

        {/* Gondolas/Cabins - 8 positions */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const x = Math.cos(angle) * 2
          const y = Math.sin(angle) * 2

          return (
            <group key={`gondola-${i}`} position={[x, y, 0]}>
              {/* Gondola cabin */}
              <mesh castShadow>
                <boxGeometry args={[0.4, 0.4, 0.4]} />
                <meshStandardMaterial 
                  color={i % 2 === 0 ? '#FFD700' : '#FF69B4'}
                  transparent
                  opacity={0.9}
                />
              </mesh>

              {/* Gondola roof */}
              <mesh position={[0, 0.25, 0]} castShadow>
                <boxGeometry args={[0.45, 0.1, 0.45]} />
                <meshStandardMaterial color="#8B0000" />
              </mesh>

              {/* Suspension bar */}
              <mesh position={[0, 0.35, 0]} castShadow>
                <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
                <meshStandardMaterial color="#696969" />
              </mesh>
            </group>
          )
        })}
      </group>

      {/* Decorative lights around the wheel */}
      {[...Array(16)].map((_, i) => {
        const angle = (i / 16) * Math.PI * 2
        const x = Math.cos(angle) * 2.2
        const y = Math.sin(angle) * 2.2

        return (
          <mesh key={`light-${i}`} position={[x, 3 + y, 0.2]} castShadow>
            <sphereGeometry args={[0.08, 12, 12]} />
            <meshStandardMaterial 
              color={i % 3 === 0 ? '#FFFF00' : i % 3 === 1 ? '#00FFFF' : '#FF00FF'}
              emissive={i % 3 === 0 ? '#FFFF00' : i % 3 === 1 ? '#00FFFF' : '#FF00FF'}
              emissiveIntensity={0.8}
            />
          </mesh>
        )
      })}

      {/* Platform/Queue Area */}
      <mesh position={[0, 0.05, 2]} receiveShadow>
        <boxGeometry args={[4, 0.1, 2]} />
        <meshStandardMaterial color="#8B7355" />
      </mesh>
    </group>
  )
}

export default FerrisWheel
