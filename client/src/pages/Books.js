import React, { useState, useEffect } from 'react'
import { GetBooks } from '../services/UserServices'
import { useNavigate } from 'react-router-dom'

const Books = () => {
    let navigate = useNavigate()
    const [books, setBooks] = useState([])

    useEffect(() => {
        const handleBooks = async () => {
            const data = await GetBooks()
            setBooks(data)
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
                    <h3>{book.title}</h3>
                ))}
            </div>
        </div>
    )
}

export default Books