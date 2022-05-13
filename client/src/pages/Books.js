import React, { useState, useEffect } from 'react'
import { GetBooks } from '../services/UserServices'
import { useNavigate } from 'react-router-dom'
import '../styles/Books.css'
import { useParams } from 'react-router-dom'

const Books = () => {
    let navigate = useNavigate()
    const [books, setBooks] = useState([])
    let { id } = useParams()
 
    useEffect(() => {
        const handleBooks = async () => {
            const data = await GetBooks()
            setBooks(data)
            console.log(data)
        }
        handleBooks()
    }, [])

    return (
        <div>
            <div>
                <h1>BOOKS</h1>
            </div>
            <div>
                {books.map((book) => (
                    <div className='individual-book' key={book.id}>
                        <div className='book'>
                            <h3 className='book-title'>{book.title}</h3>
                            <img className='book-image' src={book.photo_url} alt='book cover'/>
                            <button className='detail-btn' onClick={() => navigate(`/books/${book.id}`)} >Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Books