import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/BookDetails.css'

const BookDetails =  () => {
    let navigate = useNavigate()
    let { id } = useParams()

    const [bookDetails, setBookDetails] = useState([])
    const [reviews, setReviews] = useState([])

    const handleBookDetails = async () => {
        const res = await axios.get(`http://localhost:8000/books/${id}`)
        setBookDetails(res.data)
        console.log(res.data)     
    }

    const handleReviews = async () => {
        const res = await axios.get(`http://localhost:8000/reviews/${id}`)
        setReviews(res.data)
        console.log(res.data)
    }

    useEffect(() => {
        handleBookDetails()
        handleReviews()
    }, [id])

    console.log(reviews)

        return (
            <div>
                <div>
                        <div className='individual-book'>
                            <h3>{bookDetails.title}</h3>
                            <img className='bookDetails-image' src={bookDetails.photo_url} alt='book cover' />
                            <h4>{bookDetails.author}</h4>
                            <h4>{bookDetails.genre}</h4>
                            <h4>{bookDetails.summary}</h4>
                            <h4>{bookDetails.price}</h4>
                            <button onClick={() => navigate('/books')}>Back</button>
                        </div>
                        <div className='individual-review'>
                           <h3>{reviews.name}</h3>
                           <h4>{reviews.title}</h4>
                           <h4>{reviews.body}</h4>
                        </div>
                </div>
            </div>
        )
    
}

export default BookDetails