import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import DeleteReviewBtn from '../components/DeleteReviewBtn'
import '../styles/BookDetails.css'

const BookDetails =  () => {
    let navigate = useNavigate()
    let { id } = useParams()

    const [bookDetails, setBookDetails] = useState([])

    useEffect(() => {
        const handleBookDetails = async () => {
            const res = await axios.get(`http://localhost:8000/books/${id}`)
            setBookDetails(res.data)
            console.log(res.data)     
        }
        handleBookDetails()
    }, [id])

    console.log(bookDetails)

       if (bookDetails.reviews) {
        return (
            <div>
                <div>
                        <div className='individual-book-details'>
                            <div className='details-leftside'>
                                <img className='bookDetails-image' src={bookDetails.photo_url} alt='book cover' />
                            </div>
                            <div className='details-rightside'>
                                <h1>{bookDetails.title}</h1>
                                <h4>By: {bookDetails.author}</h4>
                                <h4>{bookDetails.genre}</h4>
                                <h4>{bookDetails.summary}</h4>
                                <h4>${bookDetails.price}</h4>
                                <button className='detail-btn' onClick={() => navigate('/books')}>Back</button>
                            </div>
                        </div>
                        <div className='reviews-bottom'>
                            <h3>Reviews:</h3> 
                            {bookDetails.reviews.map((review, index) => ( 
                                <div className='individual-review' key={index}>
                                    <h3>{review.name}</h3>
                                    <h4>{review.title}</h4>
                                    <h4>{review.body}</h4>
                                    <DeleteReviewBtn />
                                </div> 
                                ))}                             
                        </div>
                </div>
            </div>
        ) } else {
            return <h3>Loading...</h3>
        }
    
}

export default BookDetails