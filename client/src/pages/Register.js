import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
let navigate = useNavigate

const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
})

const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
}

const handleSubmit = async (e) => {
    e.preventDefault()
    // await RegisterUser({
    //     name: formValues.name,
    //     email: formValues.email,
    //     password: formValues.password
    // }) 
    setFormValues({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    navigate('/signin')
}

return (
    <div>
        <div>
            <div>
            <h3> Register for free!</h3>
            <h1> Sign up</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label className='name'>Name</label>
                    <input
                    className='register-input'
                    onChange={handleChange}
                    name='name'
                    type='text'
                    placeholder='Enter your name'
                    value={formValues.name} required />
                </div>
                <div className="input-wrapper">
                    <label className='email'>Email</label>
                    <input
                    className='register-input'
                    onChange={handleChange}
                    name='email'
                    type='text'
                    placeholder='Enter your email'
                    value={formValues.email} required />
                </div>
                <div className="input-wrapper">
                    <label className='password'>Password</label>
                    <input
                    className='register-input'
                    onChange={handleChange}
                    name='password'
                    type='text'
                    placeholder='Enter your password'
                    value={formValues.password} required />
                </div>
                <div className="input-wrapper">
                    <label className='confirmPassword'>Confirm Password</label>
                    <input
                    className='register-input'
                    onChange={handleChange}
                    name='password'
                    type='text'
                    placeholder='Confirm your password'
                    value={formValues.confirmPassword} required />
                </div>
                <button disabled={!formValues.email ||(!formValues.password &&
                formValues.confirmPassword === formValues.password)}>Register</button>
            </form>
        </div>
    </div>
)
}

export default Register 