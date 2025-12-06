function Lighting() {
  return (
    <>
      {/* Ambient light for overall illumination - warmer for fair atmosphere */}
      <ambientLight intensity={0.5} color="#FFF8DC" />
      
      {/* Main directional light (sun/evening light) */}
      <directionalLight
        position={[8, 12, 8]}
        intensity={0.8}
        color="#FFE4B5"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
      />
      
      {/* Fill lights for fair ambiance */}
      <pointLight position={[-5, 4, 0]} intensity={0.4} color="#FFD700" distance={12} />
      <pointLight position={[5, 4, 0]} intensity={0.4} color="#FF69B4" distance={12} />
      <pointLight position={[0, 3, -8]} intensity={0.5} color="#00CED1" distance={15} />
      
      {/* Spotlight for stands */}
      <spotLight 
        position={[-3.5, 6, 2]} 
        angle={0.4} 
        penumbra={0.5} 
        intensity={0.6}
        color="#FFFFFF"
        castShadow
      />
      <spotLight 
        position={[3.5, 6, 2]} 
        angle={0.4} 
        penumbra={0.5} 
        intensity={0.6}
        color="#FFFFFF"
        castShadow
      />
    </>
  )
}

export default Lighting
