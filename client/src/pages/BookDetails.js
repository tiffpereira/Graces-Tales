import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/BookDetails.css'

const BookDetails =  () => {
    let navigate = useNavigate()
    const [bookDetails, setBookDetails] = useState([])
    let { id } = useParams()
    console.log(id)

    const handleBookDetails = async () => {
        const res = await axios.get(`http://localhost:8000/books/${id}`)
        setBookDetails(res.data)
        console.log(res.data)     
    }

    useEffect(() => {
        handleBookDetails()
    }, [id])

    console.log(bookDetails)

        return (
            <div>
                <div>
                    <h1>BOOKS</h1>
                </div>
                <div>
                        <div className='individual-book'>
                        <h3>{bookDetails.title}</h3>
                        <img className='bookDetails-image' src={bookDetails.photo_url} alt='book cover' />
                        <h4>{bookDetails.author}</h4>
                        <h4>{bookDetails.genre}</h4>
                        <h4>{bookDetails.summary}</h4>
                        <h4>{bookDetails.price}</h4>
                        </div>
                </div>
            </div>
        )
    
}

export default BookDetails