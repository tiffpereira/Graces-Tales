import React, { useState, useEffect } from 'react'
import { GetBookDetails } from '../services/UserServices'
import { useNavigate } from 'react-router-dom'

const BookDetails = ( { id } ) => {
    let navigate = useNavigate()
    const [books, setBooks] = useState([])

    useEffect(() => {
        const handleBooks = async () => {
            const data = await GetBookDetails(id)
            setBooks(data)
        }
        handleBooks()
    }, [id])

    return (
        <div>
            <div>
                <h1>BOOKS</h1>
            </div>
            <div>
                {books.map((book) => (
                    <div className='individual-book' key={book.id}>
                    <h3>{book.title}</h3>
                    <img src={book.photo_url} alt='book cover' style={{height: 50, width: 50}}/>
                    <h4>{book.author}</h4>
                    <h4>{book.genre}</h4>
                    <h4>{book.summary}</h4>
                    <h4>{book.price}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BookDetails