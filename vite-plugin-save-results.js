mport fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default function saveResultsPlugin() {
  return {
    name: 'save-results',
    configureServer(server) {
      server.middlewares.use('/api/save-results', async (req, res) => {
        if (req.method === 'POST') {
          let body = ''
          
          req.on('data', chunk => {
            body += chunk.toString()
          })
          
          req.on('end', () => {
            try {
              const { filename, data } = JSON.parse(body)
              
              const resultsDir = path.join(__dirname, 'test_results')
              if (!fs.existsSync(resultsDir)) {
                fs.mkdirSync(resultsDir, { recursive: true })
              }
              
              const filePath = path.join(resultsDir, filename)
              fs.writeFileSync(filePath, data, 'utf8')
              
              console.log(`✅ Saved study data: ${filename}`)
              
              res.writeHead(200, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ success: true, filename }))
            } catch (error) {
              console.error('Error saving study data:', error)
              res.writeHead(500, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ error: 'Failed to save data' }))
            }
          })
        } else {
          res.writeHead(405)
          res.end()
        }
      })
    }
  }
}
