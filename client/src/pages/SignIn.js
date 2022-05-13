import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({ email: "", password: "" })

    const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
    const handleSubmit = async (e) => {
    e.preventDefault()
    navigate("/books")
  }
  
  return (
      <div>
          <div>
              <h3>Please sign in</h3>
          </div>
          <form className='signin-form' onSubmit={handleSubmit}>
            <div className="login">
            <label>Email</label>
            <input
                className="login-input"
                onChange={handleChange}
                name="email"
                type="text"
                placeholder="Enter your email"
                value={formValues.email}
                required
            />
            </div>

            <div className="login">
            <label>Password</label>
            <input
                className="login-input"
                onChange={handleChange}
                name="password"
                type="text"
                placeholder="Enter your password"
                value={formValues.password}
                required
          />
        </div>
        <button className='signin-button' disabled={!formValues.email || !formValues.password}>
          Sign In
        </button>
        </form>
      </div>
  )
}

export default SignIn