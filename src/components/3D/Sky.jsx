import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Sky() {
  const birdsRef = useRef()
  const cloudsRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    // Animate birds
    if (birdsRef.current) {
      birdsRef.current.children.forEach((bird, i) => {
        bird.position.x = -15 + ((time * 0.5 + i * 3) % 30)
        bird.position.y = 5 + Math.sin(time + i) * 0.3
      })
    }

    // Gentle cloud movement
    if (cloudsRef.current) {
      cloudsRef.current.children.forEach((cloud, i) => {
        cloud.position.x = -20 + ((time * 0.2 + i * 8) % 40)
      })
    }
  })

  return (
    <group>
      {/* Sun - Bright and visible in the sky */}
      <group position={[8, 10, 2]}>
        <mesh>
          <sphereGeometry args={[2, 32, 32]} />
          <meshBasicMaterial color="#FDB813" />
        </mesh>
        {/* Sun glow */}
        <mesh>
          <sphereGeometry args={[2.5, 32, 32]} />
          <meshBasicMaterial color="#FFD700" transparent opacity={0.4} />
        </mesh>
      </group>

      {/* Clouds - VISIBLE AND FLUFFY */}
      <group ref={cloudsRef}>
        {/* Cloud 1 */}
        <group position={[-6, 6, 2]}>
          <mesh>
            <sphereGeometry args={[1.5, 16, 16]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          <mesh position={[1.5, 0.3, 0]}>
            <sphereGeometry args={[1.3, 16, 16]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          <mesh position={[-1.5, 0.2, 0]}>
            <sphereGeometry args={[1.2, 16, 16]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          <mesh position={[0.8, -0.5, 0]}>
            <sphereGeometry args={[1.1, 16, 16]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
        </group>

        {/* Cloud 2 */}
        <group position={[4, 7, 2]}>
          <mesh>
            <sphereGeometry args={[1.4, 16, 16]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          <mesh position={[1.2, 0.2, 0]}>
            <sphereGeometry args={[1.2, 16, 16]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          <mesh position={[-1.2, 0.1, 0]}>
            <sphereGeometry args={[1.1, 16, 16]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
        </group>

        {/* Cloud 3 */}
        <group position={[0, 8, 3]}>
          <mesh>
            <sphereGeometry args={[1.6, 16, 16]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          <mesh position={[1.6, 0, 0]}>
            <sphereGeometry args={[1.4, 16, 16]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          <mesh position={[-1.5, 0.3, 0]}>
            <sphereGeometry args={[1.3, 16, 16]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
        </group>

        {/* Cloud 4 */}
        <group position={[-8, 5.5, 1]}>
          <mesh>
            <sphereGeometry args={[1.2, 16, 16]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          <mesh position={[1, 0, 0]}>
            <sphereGeometry args={[1.1, 16, 16]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          <mesh position={[-1, 0.2, 0]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
        </group>

        {/* Cloud 5 */}
        <group position={[7, 6.5, 1]}>
          <mesh>
            <sphereGeometry args={[1.5, 16, 16]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          <mesh position={[1.3, 0.2, 0]}>
            <sphereGeometry args={[1.3, 16, 16]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          <mesh position={[-1.3, 0, 0]}>
            <sphereGeometry args={[1.2, 16, 16]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
        </group>
      </group>

      {/* Flying Birds - VISIBLE */}
      <group ref={birdsRef}>
        {/* Bird 1 */}
        <group position={[-8, 5, 2]}>
          <mesh position={[-0.3, 0, 0]} rotation={[0, 0, 0.4]}>
            <boxGeometry args={[0.6, 0.04, 0.25]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
          <mesh position={[0.3, 0, 0]} rotation={[0, 0, -0.4]}>
            <boxGeometry args={[0.6, 0.04, 0.25]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.12, 8, 8]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
        </group>

        {/* Bird 2 */}
        <group position={[-4, 6, 3]}>
          <mesh position={[-0.3, 0, 0]} rotation={[0, 0, 0.4]}>
            <boxGeometry args={[0.6, 0.04, 0.25]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
          <mesh position={[0.3, 0, 0]} rotation={[0, 0, -0.4]}>
            <boxGeometry args={[0.6, 0.04, 0.25]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.12, 8, 8]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
        </group>

        {/* Bird 3 */}
        <group position={[0, 7, 2]}>
          <mesh position={[-0.3, 0, 0]} rotation={[0, 0, 0.4]}>
            <boxGeometry args={[0.6, 0.04, 0.25]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
          <mesh position={[0.3, 0, 0]} rotation={[0, 0, -0.4]}>
            <boxGeometry args={[0.6, 0.04, 0.25]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.12, 8, 8]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
        </group>

        {/* Bird 4 */}
        <group position={[4, 5.5, 3]}>
          <mesh position={[-0.3, 0, 0]} rotation={[0, 0, 0.4]}>
            <boxGeometry args={[0.6, 0.04, 0.25]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
          <mesh position={[0.3, 0, 0]} rotation={[0, 0, -0.4]}>
            <boxGeometry args={[0.6, 0.04, 0.25]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.12, 8, 8]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
        </group>

        {/* Bird 5 */}
        <group position={[8, 6.5, 2]}>
          <mesh position={[-0.3, 0, 0]} rotation={[0, 0, 0.4]}>
            <boxGeometry args={[0.6, 0.04, 0.25]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
          <mesh position={[0.3, 0, 0]} rotation={[0, 0, -0.4]}>
            <boxGeometry args={[0.6, 0.04, 0.25]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.12, 8, 8]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
        </group>
      </group>
    </group>
  )
}

export default Sky
