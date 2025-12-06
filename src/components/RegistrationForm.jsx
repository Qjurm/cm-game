import { useState } from 'react'
import useGameStore from '../store/gameStore'
import './RegistrationForm.css'

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    gender: '',
    age: ''
  })
  const [errors, setErrors] = useState({})
  const { setUserInfo, setGameStage } = useGameStore()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.surname.trim()) {
      newErrors.surname = 'Surname is required'
    }
    
    if (!formData.gender) {
      newErrors.gender = 'Please select a gender'
    }
    
    if (!formData.age) {
      newErrors.age = 'Age is required'
    } else if (parseInt(formData.age) < 1 || parseInt(formData.age) > 120) {
      newErrors.age = 'Please enter a valid age'
    }
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setUserInfo(formData)
    setGameStage('avatar-selection')
  }

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h1>Welcome to the Fair</h1>
        <p className="subtitle">Please fill in your information to begin</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="surname">Surname *</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Enter your surname"
              className={errors.surname ? 'error' : ''}
            />
            {errors.surname && <span className="error-message">{errors.surname}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender *</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={errors.gender ? 'error' : ''}
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
            {errors.gender && <span className="error-message">{errors.gender}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="age">Age *</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              min="1"
              max="120"
              className={errors.age ? 'error' : ''}
            />
            {errors.age && <span className="error-message">{errors.age}</span>}
          </div>

          <button type="submit" className="submit-button">
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegistrationForm
