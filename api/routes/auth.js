import express from 'express'
import { signup, signin, signout } from '../controllers/auth.js'

const router = express.Router()

// Register users to blog app
router.post('/signup', signup)

// Allow user to signin to their account
router.post('/signin', signin)

// Allow user to signout
router.post('/signout', signout)

export default router