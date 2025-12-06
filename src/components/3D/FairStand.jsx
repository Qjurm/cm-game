function FairStand({ position, color, choice, onStandClick, isSelected = false }) {
  const handleClick = () => {
    if (!isSelected && onStandClick) {
      onStandClick(choice, position)
    }
  }

  return (
    <group position={position}>
      {/* Stand Base/Counter */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[2.5, 1.6, 1.2]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Counter Top */}
      <mesh position={[0, 1.6, 0]} castShadow>
        <boxGeometry args={[2.6, 0.1, 1.3]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* Awning/Canopy Frame */}
      <mesh position={[0, 2.5, 0]} castShadow>
        <boxGeometry args={[2.8, 0.1, 1.5]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Awning Fabric */}
      <mesh position={[0, 2.3, 0.3]} rotation={[-0.3, 0, 0]} castShadow>
        <boxGeometry args={[2.8, 0.02, 1.0]} />
        <meshStandardMaterial color={color} side={2} />
      </mesh>

      {/* Decorative trim on awning */}
      <mesh position={[0, 2.1, 0.75]} castShadow>
        <boxGeometry args={[2.8, 0.15, 0.05]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>

      {/* Support Poles */}
      <mesh position={[-1.2, 1.2, 0.5]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 2.4, 8]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      <mesh position={[1.2, 1.2, 0.5]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 2.4, 8]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      <mesh position={[-1.2, 1.2, -0.5]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 2.4, 8]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      <mesh position={[1.2, 1.2, -0.5]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 2.4, 8]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* String Lights on Stand */}
      {[...Array(8)].map((_, i) => (
        <mesh 
          key={i} 
          position={[-1.2 + (i * 0.35), 2.5, 0.6]} 
          castShadow
        >
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? '#FFD700' : '#FF6347'} 
            emissive={i % 2 === 0 ? '#FFD700' : '#FF6347'}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      {/* Clickable Sign/Banner */}
      <mesh 
        position={[0, 1.8, 0.65]} 
        onClick={handleClick}
        onPointerOver={(e) => {
          e.stopPropagation()
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={(e) => {
          e.stopPropagation()
          document.body.style.cursor = 'default'
        }}
        castShadow
      >
        <boxGeometry args={[1.8, 0.8, 0.1]} />
        <meshStandardMaterial 
          color={isSelected ? '#FFFFFF' : color}
          emissive={color}
          emissiveIntensity={isSelected ? 0.5 : 0.2}
        />
      </mesh>

      {/* Decorative items on counter */}
      <mesh position={[-0.8, 1.7, 0.3]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.15, 8]} />
        <meshStandardMaterial color="#C0C0C0" />
      </mesh>
      <mesh position={[0.8, 1.7, 0.3]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.15, 8]} />
        <meshStandardMaterial color="#C0C0C0" />
      </mesh>
    </group>
  )
}

export default FairStand
