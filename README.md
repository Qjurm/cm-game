# 3D Crowd Management Study

An interactive 3D web-based experiment for studying crowd behavior and decision-making patterns in a festive winter fair environment. Built with React, Three.js, and React Three Fiber.

## 🎯 Project Overview

This application presents participants with 5 different scenarios to study how various factors influence decision-making:

### Study Flow
1. **Registration** - Participant information collection (name, age, gender)
2. **Avatar Selection** - Choose from 4 winter-themed avatars (Rudy, Binne, Emma, Lily)
3. **Instructions** - Game rules and guidance
4. **5 Game Scenarios** - Interactive decision-making tasks
5. **Study Complete** - Results summary and data export

### Game Scenarios
- **Games 1-3**: Color-coded stand choices (Green vs Red, Blue vs Red, Blue vs Green)
- **Game 4**: Crowd influence - Two identical stands with different crowd sizes (15 people vs 3 people)
- **Game 5**: Animated crowd - NPCs dynamically arrive at stands over time (3 initial vs 1+5 arriving)

The application collects comprehensive data on participant choices, response times, and behavioral patterns in a visually engaging 3D winter fair environment.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser at `http://localhost:3000`

## 🏗️ Project Structure

```
├── src/
│   ├── components/
│   │   ├── 3D/
│   │   │   ├── Avatar3D.jsx          # 4 detailed winter costume avatars
│   │   │   ├── PlayerAvatar.jsx      # Animated player with movement
│   │   │   ├── FairStand.jsx         # Interactive fair stands
│   │   │   ├── FairEnvironment.jsx   # NPCs, dogs, cats, decorations
│   │   │   ├── AnimatedNPC.jsx       # Walking animated NPCs
│   │   │   ├── AnimatedCrowdScene.jsx # Manages NPC arrival sequences
│   │   │   ├── Crowd.jsx             # Static crowd groups
│   │   │   ├── Carousel.jsx          # Animated carousel decoration
│   │   │   ├── Floor.jsx             # Snowy ground plane
│   │   │   ├── Sky.jsx               # Blue sky with clouds, birds, sun
│   │   │   ├── GameEnvironment.jsx   # Main 3D game scene
│   │   │   └── Lighting.jsx          # Scene lighting
│   │   ├── RegistrationForm.jsx      # Participant registration
│   │   ├── AvatarSelection.jsx       # Avatar selection with 3D preview
│   │   ├── Instructions.jsx          # Game instructions
│   │   ├── StudyComplete.jsx         # Completion summary
│   │   ├── Scene.jsx                 # Canvas wrapper with camera
│   │   └── UI.jsx                    # Game UI overlay
│   ├── store/
│   │   └── gameStore.js              # State management (Zustand)
│   ├── App.jsx                       # Main app with stage routing
│   ├── main.jsx
│   └── styles/                       # CSS files
├── test_results/                     # Auto-saved study results (JSON)
├── vite-plugin-save-results.js       # Custom plugin for saving results
├── package.json
├── vite.config.js
└── index.html
```
## 🎮 How It Works

### Game Flow
1. **Registration**: Participant enters name, age, and gender
2. **Avatar Selection**: Choose from 4 winter-themed avatars with 3D preview
3. **Instructions**: Learn game rules and objectives
4. **Games 1-3**: Color-coded stand selection
   - Avatar walks to selected stand
   - Waits 3 seconds
   - Returns to center
   - Proceeds to next game
5. **Game 4**: Crowd size comparison (15 vs 3 people)
6. **Game 5**: Dynamic crowd arrival (NPCs arrive in waves)
7. **Study Complete**: View summary and auto-save results

### Avatar Costumes
- **Rudy** (Deer) - Brown deer costume with antlers and spots
- **Binne** (Elf) - Green elf outfit with red accents
- **Emma** (Snowman) - White snowman costume with coal buttons
- **Lily** (Gingerbread) - Brown gingerbread outfit with icing details

### 3D Environment Features
- ❄️ Snowy ground with realistic texture
- 🎠 Animated spinning carousel
- 🌤️ Blue sky with floating clouds and flying birds
- ☀️ Bright sun with glow effect
- 👥 NPCs with realistic anatomy (heads, necks, bodies, arms, legs)
- 🐕 Dogs and 🐈 cats wandering the fair
- 🎪 Colorful fair stands with awnings

## 🔧 Technologies

- **React 18** - UI framework
- **Three.js 0.160** - 3D rendering engine
- **React Three Fiber 8.15** - React renderer for Three.js
- **Drei 9.92** - Helper components for R3F
- **Zustand 4.4** - Lightweight state management
- **Vite 5.0** - Build tool and dev server

## 📊 Data Collection

### Automatic Data Saving
Study results are automatically saved to `test_results/` folder when the study completes.

### Data Structure
```json
{
  "participantId": "timestamp",
  "participant": {
    "name": "string",
    "age": "number",
    "gender": "string"
  },
  "avatar": {
    "id": "boy1|boy2|girl1|girl2",
    "name": "Rudy|Binne|Emma|Lily",
    "gender": "male|female",
    "color": "#hex"
  },
  "choices": [
    {
      "scenarioId": 1,
      "choice": "green|red|blue|left|right",
      "timeToDecide": 3500,
      "timestamp": "ISO-8601"
    }
  ],
  "completedAt": "ISO-8601"
}
```

### Recorded Metrics
- Scenario ID and type
- Choice made (color or position)
- Decision time (milliseconds)
- Timestamp for each choice
- Participant demographics
- Avatar selection

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Configuration

#### Vite Config (`vite.config.js`)
- Custom plugin for saving study results
- Port 3000 with auto-open
- React plugin with Fast Refresh

#### Game Store (`src/store/gameStore.js`)
- 5 scenarios with different types
- State management for game flow
- Choice recording and data export

### Adding New Scenarios

Edit `src/store/gameStore.js` and add to the `scenarios` array:

```javascript
{
  id: 6,
  type: 'color-choice|crowd-influence|animated-crowd',
  question: 'Choose a stand',
  // For color-choice:
  colors: ['red', 'green'],
  // For crowd-influence:
  crowdSizes: [15, 3],
  // For animated-crowd:
  leftStand: { initialCount: 3 },
  rightStand: { 
    initialCount: 1,
    arriving: [
      { count: 2, delay: 2000 }
    ]
  }
}
```

### Customizing Avatars

Edit `src/components/3D/Avatar3D.jsx` to modify:
- Body proportions and positions
- Colors and materials
- Costume details and accessories
- Eye colors and sizes

## 🎨 Features

- ✅ Full 3D winter fair environment
- ✅ 4 unique customizable avatars with detailed costumes
- ✅ Animated avatar movement and walking
- ✅ Dynamic NPC arrivals with pathfinding
- ✅ Interactive fair stands with color variations
- ✅ Realistic crowd rendering (up to 15 NPCs)
- ✅ Environmental animations (carousel, birds, clouds)
- ✅ Automatic data collection and saving
- ✅ Responsive UI with game progression
- ✅ Complete study workflow (registration → games → completion)

## 📝 License

This project is for research purposes.