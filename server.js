const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const db = require('./config/db')
const recipeRoutes = require('./routes/recipe-routes')
const userRoutes = require('./routes/user-routes')

const PORT = 3000

mongoose.set('strictQuery', true)

mongoose.connect(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const app = express()
app.use(cors({ origin: `http://127.0.0.1:5500` }))

app.use(express.json())

app.use(recipeRoutes)
app.use(userRoutes)

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})