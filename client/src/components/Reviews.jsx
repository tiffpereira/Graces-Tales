import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DeleteReviewBtn from '../components/DeleteReviewBtn'
import axios from 'axios'

const Reviews = () => {
    let navigate = useNavigate()
    let { id } = useParams()

    const [reviews, setReviews] = useState([])

    const handleReviews = async () => {
        const res = await axios.get(`http://localhost:8000/reviews/${id}`)
        setReviews(res.data)
        console.log(res.data)
    }

    useEffect(() => {
        handleReviews()
    }, [id])

    return (
        <div>
            {reviews.map((review, index) => {
                                return (
                                    <div>
                                        <div className='individual-review' key={`${review.name}`}>
                                            <h3>{review.name}</h3>
                                            {/* <h4>{review.title}</h4>
                                            <h4>{review.rating}</h4>
                                            <h4>{review.body}</h4> */}
                                        </div>
                                        {/* <div className='Review-Delete-Btn'>
                                        <DeleteReviewBtn id={id}/> 
                                        </div> */}
                                    </div>
                             )})}
            {/* {reviews.map((review) => (
                                <div className='individual-review' key={review.id}>
                                    <h3>{review.name}</h3>
                                    <h4>{review.title}</h4>
                                    <h4>{review.rating}</h4>
                                    <h4>{review.body}</h4>
                                </div> 
                            ))} */}
        </div>

    )
}

export default Reviews 