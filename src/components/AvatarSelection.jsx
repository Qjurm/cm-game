import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useState } from 'react'
import useGameStore from '../store/gameStore'
import Avatar3D from './3D/Avatar3D'
import './AvatarSelection.css'

function AvatarSelection() {
  const { setAvatar, setGameStage, userInfo } = useGameStore()
  const [previewAvatar, setPreviewAvatar] = useState('boy1')

  const avatars = [
    { id: 'boy1', name: 'Rudy', gender: 'male', color: '#4A90E2' },
    { id: 'boy2', name: 'Binne', gender: 'male', color: '#50C878' },
    { id: 'girl1', name: 'Olaf', gender: 'female', color: '#E74C3C' },
    { id: 'girl2', name: 'Anna', gender: 'female', color: '#9B59B6' }
  ]

  const handleSelect = (avatar) => {
    setAvatar(avatar)
    setGameStage('instructions')
  }

  return (
    <div className="avatar-container">
      <div className="avatar-card-with-preview">
        <div className="avatar-preview-section">
          <h2>Preview</h2>
          <div className="canvas-preview">
            <Canvas camera={{ position: [0, 1, 3.5], fov: 50 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={0.8} />
              <Avatar3D avatarType={previewAvatar} position={[0, 0, 0]} scale={1.2} />
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                target={[0, 0.9, 0]}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2}
              />
            </Canvas>
          </div>
        </div>

        <div className="avatar-selection-section">
          <h1>Choose Your Avatar</h1>
          <p className="greeting">Hello, {userInfo?.name}! 👋</p>
          <p className="subtitle">Select an avatar to represent you in the game</p>
          
          <div className="avatar-grid">
            {avatars.map((avatar) => (
              <button
                key={avatar.id}
                className={`avatar-option ${previewAvatar === avatar.id ? 'active' : ''}`}
                onMouseEnter={() => setPreviewAvatar(avatar.id)}
                onClick={() => handleSelect(avatar)}
                style={{ 
                  borderColor: previewAvatar === avatar.id ? avatar.color : '#e0e0e0',
                  background: previewAvatar === avatar.id ? `${avatar.color}15` : 'white'
                }}
              >
                <div className="avatar-color-indicator" style={{ background: avatar.color }} />
                <div className="avatar-name">{avatar.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvatarSelection
