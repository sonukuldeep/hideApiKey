const express = require('express')
const cors = require('cors')
const { default: rateLimit } = require('express-rate-limit')
require('dotenv').config()

//init port number
const PORT = process.env.PORT || 5000

// init express
const app = express()

//rate limiting
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 30
})
app.use(limiter)
app.set('trust proxy', 1)

//Routes
app.use('/', require('./routes'))

//enable cors
app.use(cors({
    // origin: "https://random-private-chat.netlify.app/",
    methods: ["GET"],
}))


app.listen(PORT, (console.log(`Server running on port ${PORT}`)))