function FairEnvironment() {
  return (
    <group>
      {/* String Lights Overhead - Left to Right */}
      {[...Array(15)].map((_, i) => (
        <group key={`lights-lr-${i}`}>
          <mesh position={[-7 + i * 1, 4.5, -3]} castShadow>
            <sphereGeometry args={[0.1, 12, 12]} />
            <meshStandardMaterial 
              color={i % 4 === 0 ? '#FFD700' : i % 4 === 1 ? '#FF6347' : i % 4 === 2 ? '#00CED1' : '#FF69B4'}
              emissive={i % 4 === 0 ? '#FFD700' : i % 4 === 1 ? '#FF6347' : i % 4 === 2 ? '#00CED1' : '#FF69B4'}
              emissiveIntensity={0.6}
            />
          </mesh>
          {/* String/wire */}
          {i < 14 && (
            <mesh position={[-6.5 + i * 1, 4.5, -3]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.01, 0.01, 1, 4]} />
              <meshStandardMaterial color="#333333" />
            </mesh>
          )}
        </group>
      ))}

      {/* String Lights Overhead - Front to Back */}
      {[...Array(12)].map((_, i) => (
        <group key={`lights-fb-${i}`}>
          <mesh position={[5, 4.5, -6 + i * 1]} castShadow>
            <sphereGeometry args={[0.1, 12, 12]} />
            <meshStandardMaterial 
              color={i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#FF1493' : '#7FFF00'}
              emissive={i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#FF1493' : '#7FFF00'}
              emissiveIntensity={0.6}
            />
          </mesh>
        </group>
      ))}

      {/* Decorative Flags/Banners */}
      {[...Array(10)].map((_, i) => {
        const x = -6 + i * 1.5
        const colors = ['#FF6347', '#FFD700', '#00CED1', '#FF69B4', '#7FFF00']
        
        return (
          <group key={`flag-${i}`} position={[x, 4, -5]}>
            {/* Pole */}
            <mesh position={[0, -1.5, 0]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 3, 8]} />
              <meshStandardMaterial color="#654321" />
            </mesh>
            {/* Flag */}
            <mesh position={[0.15, 0.3, 0]} castShadow>
              <boxGeometry args={[0.3, 0.4, 0.02]} />
              <meshStandardMaterial color={colors[i % colors.length]} side={2} />
            </mesh>
          </group>
        )
      })}

      {/* Ground Decorations - Balloons */}
      <mesh position={[-6, 1.5, 2]} castShadow>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#FF1493" />
      </mesh>
      <mesh position={[-6, 2.0, 2]} castShadow>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
      <mesh position={[-6, 2.5, 2]} castShadow>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#00CED1" />
      </mesh>
      <mesh position={[-6, 0, 2]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, 1.5, 8]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      <mesh position={[6, 1.5, 2]} castShadow>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#7FFF00" />
      </mesh>
      <mesh position={[6, 2.0, 2]} castShadow>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#FF6347" />
      </mesh>
      <mesh position={[6, 2.5, 2]} castShadow>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#FF69B4" />
      </mesh>
      <mesh position={[6, 0, 2]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, 1.5, 8]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* Background Stalls */}
      <mesh position={[-8, 1.5, -6]} castShadow>
        <boxGeometry args={[2, 3, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[-8, 3.2, -6]} castShadow>
        <boxGeometry args={[2.2, 0.2, 1.2]} />
        <meshStandardMaterial color="#FF6347" />
      </mesh>

      <mesh position={[8, 1.5, -6]} castShadow>
        <boxGeometry args={[2, 3, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[8, 3.2, -6]} castShadow>
        <boxGeometry args={[2.2, 0.2, 1.2]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>

      {/* Additional Side Stands */}
      {/* Left side food stand */}
      <group position={[-7, 0, 1]}>
        <mesh position={[0, 1.2, 0]} castShadow>
          <boxGeometry args={[1.8, 2.4, 1]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[0, 2.6, 0]} castShadow>
          <boxGeometry args={[2, 0.15, 1.2]} />
          <meshStandardMaterial color="#DC143C" />
        </mesh>
        {/* Stand sign */}
        <mesh position={[0, 2.0, 0.6]} castShadow>
          <boxGeometry args={[1.2, 0.6, 0.05]} />
          <meshStandardMaterial color="#FFD700" />
        </mesh>
      </group>

      {/* Right side game stand */}
      <group position={[7, 0, 1]}>
        <mesh position={[0, 1.2, 0]} castShadow>
          <boxGeometry args={[1.8, 2.4, 1]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[0, 2.6, 0]} castShadow>
          <boxGeometry args={[2, 0.15, 1.2]} />
          <meshStandardMaterial color="#9370DB" />
        </mesh>
        {/* Prizes hanging */}
        {[...Array(3)].map((_, i) => (
          <mesh key={i} position={[-0.5 + i * 0.5, 2.3, 0.3]} castShadow>
            <sphereGeometry args={[0.15, 12, 12]} />
            <meshStandardMaterial color={i === 0 ? '#FF69B4' : i === 1 ? '#00CED1' : '#FFD700'} />
          </mesh>
        ))}
      </group>

      {/* Background corner stands */}
      <group position={[-6, 0, -7]}>
        <mesh position={[0, 1, 0]} castShadow>
          <boxGeometry args={[1.5, 2, 0.8]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[0, 2.2, 0]} castShadow>
          <boxGeometry args={[1.6, 0.1, 0.9]} />
          <meshStandardMaterial color="#FF6347" />
        </mesh>
      </group>

      <group position={[6, 0, -7]}>
        <mesh position={[0, 1, 0]} castShadow>
          <boxGeometry args={[1.5, 2, 0.8]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[0, 2.2, 0]} castShadow>
          <boxGeometry args={[1.6, 0.1, 0.9]} />
          <meshStandardMaterial color="#32CD32" />
        </mesh>
      </group>

      {/* Standing People - Visitors */}
      {/* Group 1 - Left side - Person in blue outfit */}
      <group position={[-5, 0, 3]}>
        {/* Head */}
        <mesh position={[0, 1.35, 0]} castShadow>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#FFE4C4" />
        </mesh>
        {/* Eyes */}
        <mesh position={[0.06, 1.37, 0.12]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[-0.06, 1.37, 0.12]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        {/* Neck */}
        <mesh position={[0, 1.2, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.08, 0.2, 8]} />
          <meshStandardMaterial color="#FFE4C4" />
        </mesh>
        {/* Torso */}
        <mesh position={[0, 0.95, 0]} castShadow>
          <cylinderGeometry args={[0.18, 0.16, 0.5, 8]} />
          <meshStandardMaterial color="#4169E1" />
        </mesh>
        {/* Arms */}
        <mesh position={[0.22, 1.05, 0]} rotation={[0, 0, 0.3]} castShadow>
          <cylinderGeometry args={[0.05, 0.04, 0.45, 8]} />
          <meshStandardMaterial color="#4169E1" />
        </mesh>
        <mesh position={[-0.22, 1.05, 0]} rotation={[0, 0, -0.3]} castShadow>
          <cylinderGeometry args={[0.05, 0.04, 0.45, 8]} />
          <meshStandardMaterial color="#4169E1" />
        </mesh>
        {/* Legs */}
        <mesh position={[0.06, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.06, 0.5, 8]} />
          <meshStandardMaterial color="#2E5090" />
        </mesh>
        <mesh position={[-0.06, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.06, 0.5, 8]} />
          <meshStandardMaterial color="#2E5090" />
        </mesh>
      </group>

      {/* Group 1 - Left side - Person in pink outfit */}
      <group position={[-4.5, 0, 3.3]}>
        {/* Head */}
        <mesh position={[0, 1.35, 0]} castShadow>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#FFDAB9" />
        </mesh>
        {/* Eyes */}
        <mesh position={[0.06, 1.37, 0.12]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[-0.06, 1.37, 0.12]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        {/* Neck */}
        <mesh position={[0, 1.2, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.08, 0.2, 8]} />
          <meshStandardMaterial color="#FFDAB9" />
        </mesh>
        {/* Torso */}
        <mesh position={[0, 0.95, 0]} castShadow>
          <cylinderGeometry args={[0.18, 0.16, 0.5, 8]} />
          <meshStandardMaterial color="#FF1493" />
        </mesh>
        {/* Arms */}
        <mesh position={[0.22, 1.05, 0]} rotation={[0, 0, 0.3]} castShadow>
          <cylinderGeometry args={[0.05, 0.04, 0.45, 8]} />
          <meshStandardMaterial color="#FF1493" />
        </mesh>
        <mesh position={[-0.22, 1.05, 0]} rotation={[0, 0, -0.3]} castShadow>
          <cylinderGeometry args={[0.05, 0.04, 0.45, 8]} />
          <meshStandardMaterial color="#FF1493" />
        </mesh>
        {/* Legs */}
        <mesh position={[0.06, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.06, 0.5, 8]} />
          <meshStandardMaterial color="#C71585" />
        </mesh>
        <mesh position={[-0.06, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.06, 0.5, 8]} />
          <meshStandardMaterial color="#C71585" />
        </mesh>
      </group>

      {/* Group 2 - Right side - Person in green outfit */}
      <group position={[5, 0, 3]}>
        {/* Head */}
        <mesh position={[0, 1.35, 0]} castShadow>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#F4A460" />
        </mesh>
        {/* Eyes */}
        <mesh position={[0.06, 1.37, 0.12]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[-0.06, 1.37, 0.12]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        {/* Neck */}
        <mesh position={[0, 1.2, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.08, 0.2, 8]} />
          <meshStandardMaterial color="#F4A460" />
        </mesh>
        {/* Torso */}
        <mesh position={[0, 0.95, 0]} castShadow>
          <cylinderGeometry args={[0.18, 0.16, 0.5, 8]} />
          <meshStandardMaterial color="#228B22" />
        </mesh>
        {/* Arms */}
        <mesh position={[0.22, 1.05, 0]} rotation={[0, 0, 0.3]} castShadow>
          <cylinderGeometry args={[0.05, 0.04, 0.45, 8]} />
          <meshStandardMaterial color="#228B22" />
        </mesh>
        <mesh position={[-0.22, 1.05, 0]} rotation={[0, 0, -0.3]} castShadow>
          <cylinderGeometry args={[0.05, 0.04, 0.45, 8]} />
          <meshStandardMaterial color="#228B22" />
        </mesh>
        {/* Legs */}
        <mesh position={[0.06, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.06, 0.5, 8]} />
          <meshStandardMaterial color="#1A6B1A" />
        </mesh>
        <mesh position={[-0.06, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.06, 0.5, 8]} />
          <meshStandardMaterial color="#1A6B1A" />
        </mesh>
      </group>

      {/* Group 2 - Right side - Person in orange outfit */}
      <group position={[4.5, 0, 2.7]}>
        {/* Head */}
        <mesh position={[0, 1.35, 0]} castShadow>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#FFE4C4" />
        </mesh>
        {/* Eyes */}
        <mesh position={[0.06, 1.37, 0.12]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[-0.06, 1.37, 0.12]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        {/* Neck */}
        <mesh position={[0, 1.2, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.08, 0.2, 8]} />
          <meshStandardMaterial color="#FFE4C4" />
        </mesh>
        {/* Torso */}
        <mesh position={[0, 0.95, 0]} castShadow>
          <cylinderGeometry args={[0.18, 0.16, 0.5, 8]} />
          <meshStandardMaterial color="#FF8C00" />
        </mesh>
        {/* Arms */}
        <mesh position={[0.22, 1.05, 0]} rotation={[0, 0, 0.3]} castShadow>
          <cylinderGeometry args={[0.05, 0.04, 0.45, 8]} />
          <meshStandardMaterial color="#FF8C00" />
        </mesh>
        <mesh position={[-0.22, 1.05, 0]} rotation={[0, 0, -0.3]} castShadow>
          <cylinderGeometry args={[0.05, 0.04, 0.45, 8]} />
          <meshStandardMaterial color="#FF8C00" />
        </mesh>
        {/* Legs */}
        <mesh position={[0.06, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.06, 0.5, 8]} />
          <meshStandardMaterial color="#CC7000" />
        </mesh>
        <mesh position={[-0.06, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.06, 0.5, 8]} />
          <meshStandardMaterial color="#CC7000" />
        </mesh>
      </group>

      {/* Group 3 - Back area - Person in purple outfit */}
      <group position={[-2, 0, -4]}>
        {/* Head */}
        <mesh position={[0, 1.35, 0]} castShadow>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#FFDAB9" />
        </mesh>
        {/* Eyes */}
        <mesh position={[0.06, 1.37, 0.12]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[-0.06, 1.37, 0.12]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        {/* Neck */}
        <mesh position={[0, 1.2, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.08, 0.2, 8]} />
          <meshStandardMaterial color="#FFDAB9" />
        </mesh>
        {/* Torso */}
        <mesh position={[0, 0.95, 0]} castShadow>
          <cylinderGeometry args={[0.18, 0.16, 0.5, 8]} />
          <meshStandardMaterial color="#9370DB" />
        </mesh>
        {/* Arms */}
        <mesh position={[0.22, 1.05, 0]} rotation={[0, 0, 0.3]} castShadow>
          <cylinderGeometry args={[0.05, 0.04, 0.45, 8]} />
          <meshStandardMaterial color="#9370DB" />
        </mesh>
        <mesh position={[-0.22, 1.05, 0]} rotation={[0, 0, -0.3]} castShadow>
          <cylinderGeometry args={[0.05, 0.04, 0.45, 8]} />
          <meshStandardMaterial color="#9370DB" />
        </mesh>
        {/* Legs */}
        <mesh position={[0.06, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.06, 0.5, 8]} />
          <meshStandardMaterial color="#7B5AB8" />
        </mesh>
        <mesh position={[-0.06, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.06, 0.5, 8]} />
          <meshStandardMaterial color="#7B5AB8" />
        </mesh>
      </group>

      {/* Group 3 - Back area - Person in red outfit */}
      <group position={[2, 0, -4.5]}>
        {/* Head */}
        <mesh position={[0, 1.35, 0]} castShadow>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#F4A460" />
        </mesh>
        {/* Eyes */}
        <mesh position={[0.06, 1.37, 0.12]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[-0.06, 1.37, 0.12]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        {/* Neck */}
        <mesh position={[0, 1.2, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.08, 0.2, 8]} />
          <meshStandardMaterial color="#F4A460" />
        </mesh>
        {/* Torso */}
        <mesh position={[0, 0.95, 0]} castShadow>
          <cylinderGeometry args={[0.18, 0.16, 0.5, 8]} />
          <meshStandardMaterial color="#DC143C" />
        </mesh>
        {/* Arms */}
        <mesh position={[0.22, 1.05, 0]} rotation={[0, 0, 0.3]} castShadow>
          <cylinderGeometry args={[0.05, 0.04, 0.45, 8]} />
          <meshStandardMaterial color="#DC143C" />
        </mesh>
        <mesh position={[-0.22, 1.05, 0]} rotation={[0, 0, -0.3]} castShadow>
          <cylinderGeometry args={[0.05, 0.04, 0.45, 8]} />
          <meshStandardMaterial color="#DC143C" />
        </mesh>
        {/* Legs */}
        <mesh position={[0.06, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.06, 0.5, 8]} />
          <meshStandardMaterial color="#A8102E" />
        </mesh>
        <mesh position={[-0.06, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.06, 0.5, 8]} />
          <meshStandardMaterial color="#A8102E" />
        </mesh>
      </group>

      {/* Dogs */}
      {/* Dog 1 - Small dog near left balloons */}
      <group position={[-5.5, 0, 2.5]}>
        {/* Body */}
        <mesh position={[0, 0.25, 0]} castShadow>
          <capsuleGeometry args={[0.12, 0.35, 8, 16]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        {/* Head */}
        <mesh position={[0, 0.3, 0.3]} castShadow>
          <sphereGeometry args={[0.13, 16, 16]} />
          <meshStandardMaterial color="#A0522D" />
        </mesh>
        {/* Neck */}
        <mesh position={[0, 0.27, 0.18]} castShadow>
          <cylinderGeometry args={[0.06, 0.08, 0.08, 8]} />
          <meshStandardMaterial color="#A0522D" />
        </mesh>
        {/* Snout */}
        <mesh position={[0, 0.25, 0.4]} castShadow>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshStandardMaterial color="#CD853F" />
        </mesh>
        {/* Nose */}
        <mesh position={[0, 0.26, 0.46]} castShadow>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        {/* Ears */}
        <mesh position={[0.08, 0.37, 0.28]} rotation={[0, 0, 0.5]} castShadow>
          <coneGeometry args={[0.05, 0.1, 8]} />
          <meshStandardMaterial color="#A0522D" />
        </mesh>
        <mesh position={[-0.08, 0.37, 0.28]} rotation={[0, 0, -0.5]} castShadow>
          <coneGeometry args={[0.05, 0.1, 8]} />
          <meshStandardMaterial color="#A0522D" />
        </mesh>
        {/* Legs */}
        <mesh position={[0.08, 0.08, 0.12]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.16, 8]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[-0.08, 0.08, 0.12]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.16, 8]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[0.08, 0.08, -0.12]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.16, 8]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[-0.08, 0.08, -0.12]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.16, 8]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        {/* Tail */}
        <mesh position={[0.03, 0.32, -0.2]} rotation={[0.7, 0, 0.3]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.15, 8]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
      </group>

      {/* Dog 2 - Bigger dog on right */}
      <group position={[5.5, 0, 2]}>
        {/* Body */}
        <mesh position={[0, 0.35, 0]} castShadow>
          <capsuleGeometry args={[0.16, 0.45, 8, 16]} />
          <meshStandardMaterial color="#D2691E" />
        </mesh>
        {/* Head */}
        <mesh position={[0, 0.4, 0.35]} castShadow>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial color="#CD853F" />
        </mesh>
        {/* Neck */}
        <mesh position={[0, 0.37, 0.2]} castShadow>
          <cylinderGeometry args={[0.08, 0.1, 0.1, 8]} />
          <meshStandardMaterial color="#CD853F" />
        </mesh>
        {/* Snout */}
        <mesh position={[0, 0.35, 0.48]} castShadow>
          <sphereGeometry args={[0.09, 12, 12]} />
          <meshStandardMaterial color="#DEB887" />
        </mesh>
        {/* Nose */}
        <mesh position={[0, 0.36, 0.56]} castShadow>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        {/* Ears */}
        <mesh position={[0.1, 0.48, 0.33]} rotation={[0, 0, 0.5]} castShadow>
          <coneGeometry args={[0.06, 0.12, 8]} />
          <meshStandardMaterial color="#CD853F" />
        </mesh>
        <mesh position={[-0.1, 0.48, 0.33]} rotation={[0, 0, -0.5]} castShadow>
          <coneGeometry args={[0.06, 0.12, 8]} />
          <meshStandardMaterial color="#CD853F" />
        </mesh>
        {/* Legs */}
        <mesh position={[0.1, 0.1, 0.15]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.2, 8]} />
          <meshStandardMaterial color="#D2691E" />
        </mesh>
        <mesh position={[-0.1, 0.1, 0.15]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.2, 8]} />
          <meshStandardMaterial color="#D2691E" />
        </mesh>
        <mesh position={[0.1, 0.1, -0.15]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.2, 8]} />
          <meshStandardMaterial color="#D2691E" />
        </mesh>
        <mesh position={[-0.1, 0.1, -0.15]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.2, 8]} />
          <meshStandardMaterial color="#D2691E" />
        </mesh>
        {/* Tail */}
        <mesh position={[0.04, 0.4, -0.25]} rotation={[0.6, 0, 0.2]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.2, 8]} />
          <meshStandardMaterial color="#D2691E" />
        </mesh>
      </group>

      {/* Cats */}
      {/* Cat 1 - Gray cat near back stand */}
      <group position={[-7.5, 0, 0]}>
        {/* Body */}
        <mesh position={[0, 0.18, 0]} castShadow>
          <capsuleGeometry args={[0.1, 0.25, 8, 16]} />
          <meshStandardMaterial color="#696969" />
        </mesh>
        {/* Neck */}
        <mesh position={[0, 0.2, 0.12]} castShadow>
          <cylinderGeometry args={[0.05, 0.06, 0.06, 8]} />
          <meshStandardMaterial color="#808080" />
        </mesh>
        {/* Head */}
        <mesh position={[0, 0.22, 0.2]} castShadow>
          <sphereGeometry args={[0.11, 16, 16]} />
          <meshStandardMaterial color="#808080" />
        </mesh>
        {/* Snout area */}
        <mesh position={[0, 0.18, 0.28]} castShadow>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial color="#909090" />
        </mesh>
        {/* Nose */}
        <mesh position={[0, 0.18, 0.33]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#FFC0CB" />
        </mesh>
        {/* Eyes */}
        <mesh position={[0.05, 0.24, 0.25]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#228B22" emissive="#228B22" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[-0.05, 0.24, 0.25]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#228B22" emissive="#228B22" emissiveIntensity={0.5} />
        </mesh>
        {/* Ears */}
        <mesh position={[0.07, 0.3, 0.18]} rotation={[0, 0, 0.3]} castShadow>
          <coneGeometry args={[0.04, 0.07, 6]} />
          <meshStandardMaterial color="#808080" />
        </mesh>
        <mesh position={[-0.07, 0.3, 0.18]} rotation={[0, 0, -0.3]} castShadow>
          <coneGeometry args={[0.04, 0.07, 6]} />
          <meshStandardMaterial color="#808080" />
        </mesh>
        {/* Legs */}
        <mesh position={[0.06, 0.05, 0.08]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.1, 8]} />
          <meshStandardMaterial color="#696969" />
        </mesh>
        <mesh position={[-0.06, 0.05, 0.08]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.1, 8]} />
          <meshStandardMaterial color="#696969" />
        </mesh>
        <mesh position={[0.06, 0.05, -0.08]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.1, 8]} />
          <meshStandardMaterial color="#696969" />
        </mesh>
        <mesh position={[-0.06, 0.05, -0.08]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.1, 8]} />
          <meshStandardMaterial color="#696969" />
        </mesh>
        {/* Tail */}
        <mesh position={[0.02, 0.2, -0.15]} rotation={[0.8, 0, 0.2]} castShadow>
          <cylinderGeometry args={[0.015, 0.015, 0.15, 8]} />
          <meshStandardMaterial color="#696969" />
        </mesh>
      </group>

      {/* Cat 2 - Orange cat near right stand */}
      <group position={[7.5, 0, 0.5]}>
        {/* Body */}
        <mesh position={[0, 0.18, 0]} castShadow>
          <capsuleGeometry args={[0.1, 0.25, 8, 16]} />
          <meshStandardMaterial color="#FF8C00" />
        </mesh>
        {/* Neck */}
        <mesh position={[0, 0.2, 0.12]} castShadow>
          <cylinderGeometry args={[0.05, 0.06, 0.06, 8]} />
          <meshStandardMaterial color="#FFA500" />
        </mesh>
        {/* Head */}
        <mesh position={[0, 0.22, 0.2]} castShadow>
          <sphereGeometry args={[0.11, 16, 16]} />
          <meshStandardMaterial color="#FFA500" />
        </mesh>
        {/* Snout area */}
        <mesh position={[0, 0.18, 0.28]} castShadow>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial color="#FFB733" />
        </mesh>
        {/* Nose */}
        <mesh position={[0, 0.18, 0.33]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#FFC0CB" />
        </mesh>
        {/* Eyes */}
        <mesh position={[0.05, 0.24, 0.25]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[-0.05, 0.24, 0.25]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
        </mesh>
        {/* Ears */}
        <mesh position={[0.07, 0.3, 0.18]} rotation={[0, 0, 0.3]} castShadow>
          <coneGeometry args={[0.04, 0.07, 6]} />
          <meshStandardMaterial color="#FFA500" />
        </mesh>
        <mesh position={[-0.07, 0.3, 0.18]} rotation={[0, 0, -0.3]} castShadow>
          <coneGeometry args={[0.04, 0.07, 6]} />
          <meshStandardMaterial color="#FFA500" />
        </mesh>
        {/* Legs */}
        <mesh position={[0.06, 0.05, 0.08]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.1, 8]} />
          <meshStandardMaterial color="#FF8C00" />
        </mesh>
        <mesh position={[-0.06, 0.05, 0.08]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.1, 8]} />
          <meshStandardMaterial color="#FF8C00" />
        </mesh>
        <mesh position={[0.06, 0.05, -0.08]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.1, 8]} />
          <meshStandardMaterial color="#FF8C00" />
        </mesh>
        <mesh position={[-0.06, 0.05, -0.08]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.1, 8]} />
          <meshStandardMaterial color="#FF8C00" />
        </mesh>
        {/* Tail */}
        <mesh position={[0.02, 0.2, -0.15]} rotation={[0.8, 0, 0.2]} castShadow>
          <cylinderGeometry args={[0.015, 0.015, 0.15, 8]} />
          <meshStandardMaterial color="#FF8C00" />
        </mesh>
      </group>

      {/* Cat 3 - White cat sitting */}
      <group position={[0, 0, -5]}>
        {/* Body - sitting position (wider, more upright) */}
        <mesh position={[0, 0.15, 0]} castShadow>
          <sphereGeometry args={[0.13, 16, 16]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
        {/* Neck */}
        <mesh position={[0, 0.23, 0.03]} castShadow>
          <cylinderGeometry args={[0.05, 0.06, 0.06, 8]} />
          <meshStandardMaterial color="#F5F5F5" />
        </mesh>
        {/* Head */}
        <mesh position={[0, 0.28, 0.05]} castShadow>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#F5F5F5" />
        </mesh>
        {/* Snout area */}
        <mesh position={[0, 0.24, 0.13]} castShadow>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
        {/* Nose */}
        <mesh position={[0, 0.24, 0.17]} castShadow>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshStandardMaterial color="#FFC0CB" />
        </mesh>
        {/* Eyes */}
        <mesh position={[0.04, 0.3, 0.11]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#4169E1" emissive="#4169E1" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[-0.04, 0.3, 0.11]} castShadow>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#4169E1" emissive="#4169E1" emissiveIntensity={0.5} />
        </mesh>
        {/* Ears */}
        <mesh position={[0.06, 0.35, 0.03]} rotation={[0, 0, 0.3]} castShadow>
          <coneGeometry args={[0.04, 0.07, 6]} />
          <meshStandardMaterial color="#F5F5F5" />
        </mesh>
        <mesh position={[-0.06, 0.35, 0.03]} rotation={[0, 0, -0.3]} castShadow>
          <coneGeometry args={[0.04, 0.07, 6]} />
          <meshStandardMaterial color="#F5F5F5" />
        </mesh>
        {/* Front paws (sitting) */}
        <mesh position={[0.06, 0.04, 0.1]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.08, 8]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
        <mesh position={[-0.06, 0.04, 0.1]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.08, 8]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
        {/* Tail wrapped around */}
        <mesh position={[0.12, 0.08, 0.05]} rotation={[0, 0, 1.5]} castShadow>
          <cylinderGeometry args={[0.015, 0.015, 0.2, 8]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
      </group>
    </group>
  )
}

export default FairEnvironment
