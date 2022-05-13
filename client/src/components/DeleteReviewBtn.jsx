import React from 'react'
import axios from 'axios'

const DeleteReviewBtn = ( { id } ) => {
    console.log(id)
    
    const handleDelete = async () => {
        await axios.delete(`http://localhost:8000/reviews/${id}`)
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteReviewBtn

