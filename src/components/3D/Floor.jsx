function Floor() {
  return (
    <group>
      {/* Main ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#D2B48C" roughness={0.8} />
      </mesh>

      {/* Checkered pathway pattern */}
      {[...Array(20)].map((_, i) => (
        <mesh 
          key={i} 
          rotation={[-Math.PI / 2, 0, 0]} 
          position={[-5 + (i % 10) * 1, 0.01, Math.floor(i / 10) * 1 + 3]} 
          receiveShadow
        >
          <planeGeometry args={[0.9, 0.9]} />
          <meshStandardMaterial color={i % 2 === 0 ? '#CD853F' : '#DEB887'} />
        </mesh>
      ))}
    </group>
  )
}

export default Floor
