import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    let navigate = useNavigate()

    return (
        <main>
            <div>
                <h1>Grace's Tales</h1>
                <p> Join Grace's Tales today for the best book reviews!</p>
            </div>
        </main>
    )

}

export default Landing