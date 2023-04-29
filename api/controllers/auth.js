
import { connection } from '../dbConfig.js'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

// Function to create new user account
export const signup = (req, res) => {
    // Check if user already exists
    const userDetails = "SELECT USER_EMAIL, USERNAME FROM `USERS` WHERE USER_EMAIL = ? OR USERNAME = ?"

    connection.query(userDetails, [req.body.email, req.body.username], (err, data) => {
        if(err) return res.status(500).json(err)
        // If the email and username are already used, then
        if(data.length) return res.status(409).json("Invalid! User already Exists!")
        
        // Create new user account
        // Hash the password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        // Add new user to DB
        const userDetails = "INSERT INTO `USERS` (`USER_FIRSTNAME`, `USER_LASTNAME`,`USER_EMAIL`,`USERNAME`, `USER_PASSWORD`) VALUES (?)"
        const values = [ 
            req.body.firstName, 
            req.body.lastName,
            req.body.email,
            req.body.username,
            hash,
        ]

        connection.query(userDetails, [values], (err, data) => {
            if(err) return res.json(err)
            return res.status(200).json({
                message: "New account created!",

            })
        })
    })
}

// Function to allow user to sign in 
export const signin = (req, res) => {
    // Check if user exists
    const userDetails = "SELECT * FROM `USERS` WHERE `USERNAME` = ?"

    connection.query(userDetails, [req.body.username], (err, data) => {
        // In case of an error
        if(err) return res.status(500).json(err)
        // Check if there is a user by that username
        if(data.length === 0) return res.status(404).json(" Sorry! That user does not exist. ")
        
        // If the user exists compare email password combinations
        const isPasswordValid = bcrypt.compareSync(
            req.body.password,
            data[0].password)

        // Wrong password
        if(!isPasswordValid) {
            return res.status(401).json("Sorry! Wrong username or password.")
        }
        // Signing user in using token with user id
        const token = jwt.sign({ id: data[0].id }, "my_secretKey")
        const { password, ...other } = data[0]
        // Store cookie
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json(other)
    })
}

// Function to allow user to sign out
export const signout = (req, res) => {
    // Destroy session cookie
    res.clearCookie("access_token", {
        sameSite:"none", secure:true
    }).status(200).json(" You have been signed out. ")
}