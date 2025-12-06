import { useRef } from 'react'

function Avatar3D({ avatarType, position = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef()

  // Avatar configurations
  const avatarConfigs = {
    boy1: { // Rudy - Deer costume
      type: 'deer',
      skinColor: '#ffdbac',
      costumeColor: '#8B4513',
      spotColor: '#FFFFFF'
    },
    boy2: { // Binne - Elf costume
      type: 'elf',
      skinColor: '#f5d0a9',
      costumeColor: '#228B22',
      accentColor: '#DC143C'
    },
    girl1: { // Emma - Snowman costume
      type: 'snowman',
      skinColor: '#ffe0bd',
      costumeColor: '#FFFFFF',
      accentColor: '#FF6347'
    },
    girl2: { // Lily - Gingerbread costume
      type: 'gingerbread',
      skinColor: '#ffd7b5',
      costumeColor: '#8B4513',
      accentColor: '#FFFFFF'
    }
  }

  const config = avatarConfigs[avatarType] || avatarConfigs.boy1

  // Render Rudy - Deer Costume
  if (config.type === 'deer') {
    return (
      <group ref={groupRef} position={position} scale={scale}>
        {/* Face/Head */}
        <mesh position={[0, 1.45, 0]} castShadow>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color={config.skinColor} />
        </mesh>

        {/* Deer Hood/Head */}
        <mesh position={[0, 1.5, 0]} castShadow>
          <sphereGeometry args={[0.23, 16, 16]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* Deer Snout */}
        <mesh position={[0, 1.4, 0.18]} castShadow>
          <boxGeometry args={[0.12, 0.1, 0.15]} />
          <meshStandardMaterial color="#6B4423" />
        </mesh>

        {/* Eyes - LARGE BLUE EYES */}
        <mesh position={[-0.1, 1.52, 0.22]} castShadow>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#4169E1" />
        </mesh>
        <mesh position={[0.1, 1.52, 0.22]} castShadow>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#4169E1" />
        </mesh>

        {/* Left Antler */}
        <group position={[-0.15, 1.65, 0]}>
          <mesh position={[0, 0.1, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.03, 0.25, 8]} />
            <meshStandardMaterial color="#8B7355" />
          </mesh>
          <mesh position={[-0.05, 0.18, 0]} rotation={[0, 0, 0.5]} castShadow>
            <cylinderGeometry args={[0.015, 0.02, 0.12, 8]} />
            <meshStandardMaterial color="#8B7355" />
          </mesh>
        </group>

        {/* Right Antler */}
        <group position={[0.15, 1.65, 0]}>
          <mesh position={[0, 0.1, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.03, 0.25, 8]} />
            <meshStandardMaterial color="#8B7355" />
          </mesh>
          <mesh position={[0.05, 0.18, 0]} rotation={[0, 0, -0.5]} castShadow>
            <cylinderGeometry args={[0.015, 0.02, 0.12, 8]} />
            <meshStandardMaterial color="#8B7355" />
          </mesh>
        </group>

        {/* Neck */}
        <mesh position={[0, 1.23, 0]} castShadow>
          <cylinderGeometry args={[0.09, 0.11, 0.25, 8]} />
          <meshStandardMaterial color={config.skinColor} />
        </mesh>

        {/* Deer Body/Costume */}
        <mesh position={[0, 0.9, 0]} castShadow>
          <boxGeometry args={[0.5, 0.6, 0.3]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* White Spots on Body */}
        <mesh position={[-0.15, 1.05, 0.16]} castShadow>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial color={config.spotColor} />
        </mesh>
        <mesh position={[0.12, 0.95, 0.16]} castShadow>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial color={config.spotColor} />
        </mesh>

        {/* Arms */}
        <mesh position={[-0.32, 1.05, 0]} rotation={[0, 0, 0.2]} castShadow>
          <cylinderGeometry args={[0.07, 0.07, 0.5, 8]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>
        <mesh position={[0.32, 1.05, 0]} rotation={[0, 0, -0.2]} castShadow>
          <cylinderGeometry args={[0.07, 0.07, 0.5, 8]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* Hooves (hands) */}
        <mesh position={[-0.37, 0.65, 0]} castShadow>
          <boxGeometry args={[0.1, 0.12, 0.08]} />
          <meshStandardMaterial color="#3B3024" />
        </mesh>
        <mesh position={[0.37, 0.65, 0]} castShadow>
          <boxGeometry args={[0.1, 0.12, 0.08]} />
          <meshStandardMaterial color="#3B3024" />
        </mesh>

        {/* Legs */}
        <mesh position={[-0.1, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.1, 0.09, 0.7, 8]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>
        <mesh position={[0.1, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.1, 0.09, 0.7, 8]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* Hooves (feet) */}
        <mesh position={[-0.1, 0.05, 0.05]} castShadow>
          <boxGeometry args={[0.12, 0.08, 0.15]} />
          <meshStandardMaterial color="#3B3024" />
        </mesh>
        <mesh position={[0.1, 0.05, 0.05]} castShadow>
          <boxGeometry args={[0.12, 0.08, 0.15]} />
          <meshStandardMaterial color="#3B3024" />
        </mesh>

        {/* Tail */}
        <mesh position={[0, 0.85, -0.18]} castShadow>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial color={config.spotColor} />
        </mesh>
      </group>
    )
  }

  // Render Binne - Elf Costume
  if (config.type === 'elf') {
    return (
      <group ref={groupRef} position={position} scale={scale}>
        {/* Face */}
        <mesh position={[0, 1.45, 0]} castShadow>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color={config.skinColor} />
        </mesh>

        {/* Elf Hat */}
        <mesh position={[0, 1.7, 0]} rotation={[0, 0, 0.1]} castShadow>
          <coneGeometry args={[0.22, 0.4, 16]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* Hat Pom-pom */}
        <mesh position={[0.05, 1.9, 0]} castShadow>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial color={config.accentColor} />
        </mesh>

        {/* Left Elf Ear */}
        <mesh position={[-0.22, 1.5, 0]} rotation={[0, 0, -0.5]} castShadow>
          <coneGeometry args={[0.06, 0.15, 8]} />
          <meshStandardMaterial color={config.skinColor} />
        </mesh>

        {/* Right Elf Ear */}
        <mesh position={[0.22, 1.5, 0]} rotation={[0, 0, 0.5]} castShadow>
          <coneGeometry args={[0.06, 0.15, 8]} />
          <meshStandardMaterial color={config.skinColor} />
        </mesh>

        {/* Eyes - LARGE BLACK EYES */}
        <mesh position={[-0.1, 1.48, 0.2]} castShadow>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.1, 1.48, 0.2]} castShadow>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>

        {/* Neck with collar */}
        <mesh position={[0, 1.21, 0]} castShadow>
          <cylinderGeometry args={[0.09, 0.11, 0.25, 8]} />
          <meshStandardMaterial color={config.skinColor} />
        </mesh>

        {/* Elf Tunic/Top */}
        <mesh position={[0, 0.9, 0]} castShadow>
          <boxGeometry args={[0.5, 0.6, 0.3]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* Red Belt */}
        <mesh position={[0, 0.62, 0]} castShadow>
          <cylinderGeometry args={[0.26, 0.26, 0.08, 16]} />
          <meshStandardMaterial color={config.accentColor} />
        </mesh>

        {/* Belt Buckle */}
        <mesh position={[0, 0.62, 0.16]} castShadow>
          <boxGeometry args={[0.08, 0.08, 0.02]} />
          <meshStandardMaterial color="#FFD700" />
        </mesh>

        {/* Arms */}
        <mesh position={[-0.32, 1.05, 0]} rotation={[0, 0, 0.2]} castShadow>
          <cylinderGeometry args={[0.07, 0.07, 0.5, 8]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>
        <mesh position={[0.32, 1.05, 0]} rotation={[0, 0, -0.2]} castShadow>
          <cylinderGeometry args={[0.07, 0.07, 0.5, 8]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* Hands */}
        <mesh position={[-0.37, 0.65, 0]} castShadow>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial color={config.skinColor} />
        </mesh>
        <mesh position={[0.37, 0.65, 0]} castShadow>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial color={config.skinColor} />
        </mesh>

        {/* Legs with striped stockings */}
        <mesh position={[-0.1, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.1, 0.09, 0.7, 8]} />
          <meshStandardMaterial color={config.accentColor} />
        </mesh>
        <mesh position={[0.1, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.1, 0.09, 0.7, 8]} />
          <meshStandardMaterial color={config.accentColor} />
        </mesh>

        {/* Green stripes on legs */}
        <mesh position={[-0.1, 0.55, 0]} castShadow>
          <cylinderGeometry args={[0.11, 0.11, 0.08, 8]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>
        <mesh position={[0.1, 0.55, 0]} castShadow>
          <cylinderGeometry args={[0.11, 0.11, 0.08, 8]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>
        <mesh position={[-0.1, 0.25, 0]} castShadow>
          <cylinderGeometry args={[0.10, 0.10, 0.08, 8]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>
        <mesh position={[0.1, 0.25, 0]} castShadow>
          <cylinderGeometry args={[0.10, 0.10, 0.08, 8]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* Curly-toed Elf Shoes */}
        <mesh position={[-0.1, 0.05, 0.15]} rotation={[0.4, 0, 0]} castShadow>
          <boxGeometry args={[0.12, 0.08, 0.25]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>
        <mesh position={[0.1, 0.05, 0.15]} rotation={[0.4, 0, 0]} castShadow>
          <boxGeometry args={[0.12, 0.08, 0.25]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* Shoe pom-poms */}
        <mesh position={[-0.1, 0.08, 0.3]} castShadow>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshStandardMaterial color="#FFD700" />
        </mesh>
        <mesh position={[0.1, 0.08, 0.3]} castShadow>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshStandardMaterial color="#FFD700" />
        </mesh>
      </group>
    )
  }

  // Render Emma - Snowman Costume
  if (config.type === 'snowman') {
    return (
      <group ref={groupRef} position={position} scale={scale}>
        {/* Face */}
        <mesh position={[0, 1.45, 0]} castShadow>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color={config.skinColor} />
        </mesh>

        {/* Snowman Hood - White round hood */}
        <mesh position={[0, 1.5, 0]} castShadow>
          <sphereGeometry args={[0.24, 16, 16]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* Carrot Nose */}
        <mesh position={[0, 1.45, 0.25]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <coneGeometry args={[0.04, 0.15, 8]} />
          <meshStandardMaterial color="#FF6347" />
        </mesh>

        {/* Coal Eyes - LARGE BLACK EYES */}
        <mesh position={[-0.1, 1.52, 0.22]} castShadow>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.1, 1.52, 0.22]} castShadow>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>

        {/* Coal Smile */}
        <mesh position={[-0.04, 1.37, 0.18]} castShadow>
          <sphereGeometry args={[0.02, 12, 12]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0, 1.35, 0.19]} castShadow>
          <sphereGeometry args={[0.02, 12, 12]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.04, 1.37, 0.18]} castShadow>
          <sphereGeometry args={[0.02, 12, 12]} />
          <meshStandardMaterial color="#000000" />
        </mesh>

        {/* Neck */}
        <mesh position={[0, 1.21, 0]} castShadow>
          <cylinderGeometry args={[0.09, 0.11, 0.25, 8]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* Snowman Body - Round white body */}
        <mesh position={[0, 0.9, 0]} castShadow>
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* Coal Buttons on body */}
        <mesh position={[0, 1.05, 0.35]} castShadow>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0, 0.9, 0.36]} castShadow>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0, 0.75, 0.35]} castShadow>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshStandardMaterial color="#000000" />
        </mesh>

        {/* Red Scarf */}
        <mesh position={[0, 1.12, 0]} castShadow>
          <torusGeometry args={[0.15, 0.04, 12, 24]} />
          <meshStandardMaterial color={config.accentColor} />
        </mesh>
        <mesh position={[0.18, 1.05, 0.05]} rotation={[0, 0, -0.3]} castShadow>
          <boxGeometry args={[0.08, 0.25, 0.03]} />
          <meshStandardMaterial color={config.accentColor} />
        </mesh>

        {/* Arms - White stick arms */}
        <mesh position={[-0.35, 0.95, 0]} rotation={[0, 0, 0.4]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.45, 8]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[0.35, 0.95, 0]} rotation={[0, 0, -0.4]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.45, 8]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>

        {/* Stick fingers */}
        <mesh position={[-0.48, 0.72, 0]} rotation={[0, 0, 0.7]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.1, 8]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[0.48, 0.72, 0]} rotation={[0, 0, -0.7]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.1, 8]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>

        {/* Lower body - White sphere */}
        <mesh position={[0, 0.5, 0]} castShadow>
          <sphereGeometry args={[0.28, 16, 16]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* Legs */}
        <mesh position={[-0.1, 0.15, 0]} castShadow>
          <cylinderGeometry args={[0.09, 0.09, 0.3, 8]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>
        <mesh position={[0.1, 0.15, 0]} castShadow>
          <cylinderGeometry args={[0.09, 0.09, 0.3, 8]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* Boots */}
        <mesh position={[-0.1, 0.02, 0.05]} castShadow>
          <boxGeometry args={[0.12, 0.06, 0.18]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.1, 0.02, 0.05]} castShadow>
          <boxGeometry args={[0.12, 0.06, 0.18]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </group>
    )
  }

  // Render Lily - Gingerbread Costume
  if (config.type === 'gingerbread') {
    return (
      <group ref={groupRef} position={position} scale={scale}>
        {/* Face */}
        <mesh position={[0, 1.45, 0]} castShadow>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color={config.skinColor} />
        </mesh>

        {/* Gingerbread Hood/Head */}
        <mesh position={[0, 1.5, 0]} castShadow>
          <boxGeometry args={[0.4, 0.35, 0.25]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* White icing trim on head */}
        <mesh position={[0, 1.67, 0.03]} castShadow>
          <boxGeometry args={[0.42, 0.06, 0.27]} />
          <meshStandardMaterial color={config.accentColor} />
        </mesh>

        {/* Candy Eyes - LARGE BLUE EYES */}
        <mesh position={[-0.1, 1.52, 0.2]} castShadow>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#4169E1" />
        </mesh>
        <mesh position={[0.1, 1.52, 0.2]} castShadow>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#4169E1" />
        </mesh>

        {/* Frosting smile */}
        <mesh position={[0, 1.37, 0.14]} rotation={[0, 0, 0]} castShadow>
          <torusGeometry args={[0.08, 0.015, 8, 16, Math.PI]} />
          <meshStandardMaterial color={config.accentColor} />
        </mesh>

        {/* Neck */}
        <mesh position={[0, 1.21, 0]} castShadow>
          <cylinderGeometry args={[0.09, 0.11, 0.25, 8]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* Gingerbread Body */}
        <mesh position={[0, 0.9, 0]} castShadow>
          <boxGeometry args={[0.5, 0.6, 0.28]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* White icing trim - wavy pattern */}
        <mesh position={[0, 1.2, 0.15]} castShadow>
          <boxGeometry args={[0.52, 0.04, 0.02]} />
          <meshStandardMaterial color={config.accentColor} />
        </mesh>
        <mesh position={[0, 0.6, 0.15]} castShadow>
          <boxGeometry args={[0.52, 0.04, 0.02]} />
          <meshStandardMaterial color={config.accentColor} />
        </mesh>

        {/* Gumdrop Buttons */}
        <mesh position={[0, 1.05, 0.15]} castShadow>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshStandardMaterial color="#FF1493" />
        </mesh>
        <mesh position={[0, 0.9, 0.15]} castShadow>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshStandardMaterial color="#00FF00" />
        </mesh>
        <mesh position={[0, 0.75, 0.15]} castShadow>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshStandardMaterial color="#FF1493" />
        </mesh>

        {/* Arms with icing */}
        <mesh position={[-0.32, 0.95, 0]} rotation={[0, 0, 0.3]} castShadow>
          <boxGeometry args={[0.12, 0.5, 0.12]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>
        <mesh position={[0.32, 0.95, 0]} rotation={[0, 0, -0.3]} castShadow>
          <boxGeometry args={[0.12, 0.5, 0.12]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* White icing on arms */}
        <mesh position={[-0.32, 1.18, 0]} rotation={[0, 0, 0.3]} castShadow>
          <boxGeometry args={[0.13, 0.05, 0.13]} />
          <meshStandardMaterial color={config.accentColor} />
        </mesh>
        <mesh position={[0.32, 1.18, 0]} rotation={[0, 0, -0.3]} castShadow>
          <boxGeometry args={[0.13, 0.05, 0.13]} />
          <meshStandardMaterial color={config.accentColor} />
        </mesh>

        {/* Gingerbread hands */}
        <mesh position={[-0.38, 0.68, 0]} castShadow>
          <boxGeometry args={[0.1, 0.1, 0.08]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>
        <mesh position={[0.38, 0.68, 0]} castShadow>
          <boxGeometry args={[0.1, 0.1, 0.08]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* Legs */}
        <mesh position={[-0.09, 0.4, 0]} castShadow>
          <boxGeometry args={[0.16, 0.7, 0.16]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>
        <mesh position={[0.09, 0.4, 0]} castShadow>
          <boxGeometry args={[0.16, 0.7, 0.16]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* White icing on legs */}
        <mesh position={[-0.09, 0.73, 0]} castShadow>
          <boxGeometry args={[0.17, 0.05, 0.17]} />
          <meshStandardMaterial color={config.accentColor} />
        </mesh>
        <mesh position={[0.09, 0.73, 0]} castShadow>
          <boxGeometry args={[0.17, 0.05, 0.17]} />
          <meshStandardMaterial color={config.accentColor} />
        </mesh>

        {/* Gingerbread feet */}
        <mesh position={[-0.09, 0.04, 0.06]} castShadow>
          <boxGeometry args={[0.14, 0.06, 0.2]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>
        <mesh position={[0.09, 0.04, 0.06]} castShadow>
          <boxGeometry args={[0.14, 0.06, 0.2]} />
          <meshStandardMaterial color={config.costumeColor} />
        </mesh>

        {/* Candy on feet */}
        <mesh position={[-0.09, 0.08, 0.14]} castShadow>
          <sphereGeometry args={[0.03, 12, 12]} />
          <meshStandardMaterial color="#FF0000" />
        </mesh>
        <mesh position={[0.09, 0.08, 0.14]} castShadow>
          <sphereGeometry args={[0.03, 12, 12]} />
          <meshStandardMaterial color="#00FF00" />
        </mesh>
      </group>
    )
  }

  // Default avatars (shouldn't be used anymore)
  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Head */}
      <mesh position={[0, 1.6, 0]} castShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color={config.skinColor} />
      </mesh>

      {/* Hair */}
      <mesh position={[0, 1.75, 0]} castShadow>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial color={config.hairColor} />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 1.4, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.1, 0.15, 8]} />
        <meshStandardMaterial color={config.skinColor} />
      </mesh>

      {/* Torso/Shirt */}
      <mesh position={[0, 1.0, 0]} castShadow>
        <boxGeometry args={[0.5, 0.6, 0.3]} />
        <meshStandardMaterial color={config.shirtColor} />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-0.32, 1.05, 0]} rotation={[0, 0, 0.2]} castShadow>
        <cylinderGeometry args={[0.07, 0.07, 0.5, 8]} />
        <meshStandardMaterial color={config.shirtColor} />
      </mesh>

      {/* Right Arm */}
      <mesh position={[0.32, 1.05, 0]} rotation={[0, 0, -0.2]} castShadow>
        <cylinderGeometry args={[0.07, 0.07, 0.5, 8]} />
        <meshStandardMaterial color={config.shirtColor} />
      </mesh>

      {/* Left Hand */}
      <mesh position={[-0.37, 0.75, 0]} castShadow>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshStandardMaterial color={config.skinColor} />
      </mesh>

      {/* Right Hand */}
      <mesh position={[0.37, 0.75, 0]} castShadow>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshStandardMaterial color={config.skinColor} />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.13, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.09, 0.7, 8]} />
        <meshStandardMaterial color={config.pantsColor} />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.13, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.09, 0.7, 8]} />
        <meshStandardMaterial color={config.pantsColor} />
      </mesh>

      {/* Left Shoe */}
      <mesh position={[-0.13, 0.05, 0.05]} castShadow>
        <boxGeometry args={[0.12, 0.08, 0.2]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* Right Shoe */}
      <mesh position={[0.13, 0.05, 0.05]} castShadow>
        <boxGeometry args={[0.12, 0.08, 0.2]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
    </group>
  )
}

export default Avatar3D
