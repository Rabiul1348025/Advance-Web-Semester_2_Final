import React from 'react'
import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

// Function to render the Create Account page
const Signup = () => {
// Create user account function
  const [inputs, setInputs] = useState({ 
    firstName:"", 
    lastName:"",
    email:"", 
    username:"",
    password:"",
  })
  const [err, setError] = useState(null)

  // Successful Registration redirect to login page
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
      await axios.post('/auth/signup', inputs)
      // After successful registration redirect to login page
      navigate("/signin")
    }
    catch(err){
      //
      setError(err.response.data)
    }
  }

  // Render create account form
  return (
    <section className='authenticator'>
      <h1> Create Account </h1>
      <form>
        <input type='text' placeholder='First Name' name='firstName' onChange={handleChange}/>
        <input type='text' placeholder='Last Name' name='lastName' onChange={handleChange}/>
        <input type='email' placeholder='Email' name='email' onChange={handleChange}/>
        <input type='text' placeholder='Username'name='username' onChange={handleChange}/>
        <input type='password' placeholder='Password' name='password' onChange={handleChange}/>
        <button type='submit' onClick={handleSubmit}>Create Account</button>
        {err && <p> {err} </p>}
        <label>Already have an Account? <Link to='/signin'>Sign in</Link>
        </label>
      </form>
    </section>
  )
}

export default Signup