import React from 'react'
import { useState } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({ email: "", password: "" })

    const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  
  return (
      <div>
          <div>
              <h3>Please sign in</h3>
          </div>
          <form className='signin-form'
          
          />
      </div>
  )
}