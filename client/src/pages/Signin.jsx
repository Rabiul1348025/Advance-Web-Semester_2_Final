import React from 'react'
import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

// Function to render the Sign in page
const Signin = () => {

  // Get user credentials from browser
  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  })
  const[err, setError] = useState(null)

  // Successful sign in redirect to blog write post page
  const navigate = useNavigate()

  // Function to handle form change events
  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  // Function to handle form submit events
  const handleSubmit = async e => {
    e.preventDefault()
     
    // Pass inputs
    try{
      
      // After successful sign in redirect homepage
      navigate("/")
    }
    catch(err){
      // 
      setError(err.response.data)
    }
  }

  return (
    // Render signin form to user
    <section className='authenticator'>
      <h1> Sign In </h1>
      <form>
        <input type='text' placeholder='Username' name='username' onChange={handleChange}></input>
        <input type='password' placeholder='Password' name='password' onChange={handleChange}></input>
        <button type='submit' onClick={handleSubmit}>Sign In</button>
        {err && <p> {err} </p>}
        <label>Don't have an account yet ? <Link to='/signup'>Create an Account</Link>
        </label>
      </form>
    </section>
  )
}

export default Signin