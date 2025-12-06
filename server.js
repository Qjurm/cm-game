import express from 'express'
import fs from 'fs/promises'
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

// API endpoint to save study results
app.post('/api/save-results', async (req, res) => {
  try {
    const { filename, data } = req.body
    
    if (!filename || !data) {
      return res.status(400).json({ error: 'Missing filename or data' })
    }
    
    const resultsDir = path.join(__dirname, 'test_results')
    const filePath = path.join(resultsDir, filename)
    
    // Ensure test_results directory exists
    await fs.mkdir(resultsDir, { recursive: true })
    
    // Write the file
    await fs.writeFile(filePath, data, 'utf8')
    
    console.log(`✅ Saved study data: ${filename}`)
    
    res.json({ 
      success: true, 
      message: 'Data saved successfully',
      filename: filename 
    })
  } catch (error) {
    console.error('Error saving study data:', error)
    res.status(500).json({ error: 'Failed to save data' })
  }
})

app.listen(PORT, () => {
  console.log(`📊 Study results server running on http://localhost:${PORT}`)
  console.log(`📁 Saving results to: ${path.join(__dirname, 'test_results')}`)
})
