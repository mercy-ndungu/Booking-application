 const express = require('express')
const app = express()
const { PORT } = require('./constants')

const cookieParser = require('cookie-parser')
const passport  = require('passport')
const cors = require('cors')

// import passport middleware
require('./middleware/passport-middleware')

app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: CLIENT_URL, credentials: true }))
app.use(passport.initialize())

const authRoutes = require('./routes/auth')

app.use('/api', authRoutes)

const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`The app is running at http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

appStart()
 