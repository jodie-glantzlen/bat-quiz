import express = require('express')
import cors = require('cors')
import type { Player } from '../types'
const { sortScores } = require('./utils/sortScores')

const app = express()
app.use(cors())
app.use(express.json())

let scores: Player[] = []

app.post('/player', (req, res) => {
  const player: Player = req.body
  scores.push(player)
  res.status(201).json(player)
})

app.get('/scores', (_req, res) => {
  res.json(sortScores(scores))
})

app.listen(4000, () => console.log('Server running on http://localhost:4000'))
