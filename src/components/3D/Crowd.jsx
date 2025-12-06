import { useMemo } from 'react'

function Crowd({ position, size = 12 }) {
  // Generate random positions for crowd members based on size
  const crowdMembers = useMemo(() => {
    const members = []
    
    // Calculate rows and columns based on size
    let rows, cols
    if (size === 3) {
      rows = 1
      cols = 3
    } else if (size === 15) {
      rows = 3
      cols = 5
    } else {
      // Default 12 people (3x4)
      rows = 3
      cols = 4
    }
    
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (members.length >= size) break
        members.push({
          position: [
            position[0] + (j - cols / 2) * 0.6 + (Math.random() - 0.5) * 0.2,
            position[1],
            position[2] + i * 0.6 + (Math.random() - 0.5) * 0.2
          ],
          color: `hsl(${Math.random() * 360}, 70%, 60%)`
        })
      }
      if (members.length >= size) break
    }
    return members
  }, [position, size])

  return (
    <group>
      {crowdMembers.map((member, index) => (
        <group key={index} position={member.position} scale={1.5}>
          {/* Head */}
          <mesh position={[0, 1.25, 0]} castShadow>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="#ffdbac" />
          </mesh>
          
          {/* Neck */}
          <mesh position={[0, 1.1, 0]} castShadow>
            <cylinderGeometry args={[0.08, 0.08, 0.1, 8]} />
            <meshStandardMaterial color="#ffdbac" />
          </mesh>
          
          {/* Torso */}
          <mesh position={[0, 0.75, 0]} castShadow>
            <boxGeometry args={[0.35, 0.6, 0.2]} />
            <meshStandardMaterial color={member.color} />
          </mesh>
          
          {/* Legs */}
          <mesh position={[-0.1, 0.25, 0]} castShadow>
            <cylinderGeometry args={[0.08, 0.08, 0.5, 8]} />
            <meshStandardMaterial color="#4a4a4a" />
          </mesh>
          
          <mesh position={[0.1, 0.25, 0]} castShadow>
            <cylinderGeometry args={[0.08, 0.08, 0.5, 8]} />
            <meshStandardMaterial color="#4a4a4a" />
          </mesh>
        </group>
      ))}
    </group>
  )
}

export default Crowd
