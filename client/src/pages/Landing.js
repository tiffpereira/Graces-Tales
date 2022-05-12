import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Landing.css'

const Landing = () => {
    let navigate = useNavigate()

    return (
        <main>
            <div className='image'>
            <div className='rightside'>
                <div>
                    <h1>Grace's Tales</h1>
                    <p> Join Grace's Tales today for the best book deals!</p>
                </div>
                <div className='bothbuttons'>
                    <div className='registerbutton'> 
                    <button className='landingpagebutton'onClick={() => navigate('/register')}>Join Now</button>
                    </div>
                    <div className='signinbutton'> 
                    <button className='landingpagebutton'onClick={() => navigate('/signin')}>Sign In</button>
                    </div>
                </div>
            </div>
            </div>
        </main>
    )

}

export default Landing