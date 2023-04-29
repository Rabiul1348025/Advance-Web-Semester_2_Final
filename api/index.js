// Server Setup
import express from 'express'
import cookieParser from 'cookie-parser'

import postRoute from './routes/posts.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'

const app = express()

// Allow data parsing
app.use(express.json())
app.use(cookieParser())
app.use('/api/posts', postRoute)
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)

// Server port and conformation message
app.listen(8080, () => {
    console.log('\n Server \n -----------------\n Status\t: Running \n Port\t: 8080 \n ----------------- ')
})