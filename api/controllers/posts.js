import { connection } from "../dbConfig"

import jwt from "jsonwebtoken"

// Create a new blog post
export const addPost = (req, res) => {
    // Get all the posts by category
    const authorPosts = req.query.category 
    ? "SELECT * FROM `posts` WHERE category = ?"
    : "SELECT * FROM POSTS"

    // Query the database
    connection.query(authorPosts, [req.query.category], (err, data) => {
        if (err) return res.status(500).send(err)
        // Return posts
        return res.status(200).json(data)
    })
}

// Retrieve posts by author
