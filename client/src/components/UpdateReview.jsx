import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useParams } from 'react-router-dom'


const UpdateReview = ( { review } ) => {
    let navigate = useNavigate()
    let { id } = useParams()

    const [update, setUpdate] = useState(false);
    const [formValues, setFormValues] = useState(
        {
            name: review.name,
            title: review.title,
            body: review.body,
        })

    const handleChange = (e) => {
            setFormValues({ ...formValues, [e.target.name]: e.target.value });
        }
    const handleSubmit = async (e) => {
            e.preventDefault();
            await axios.put(`http://localhost:8000/reviews/${id}`(formValues));
            navigate("/books");
            window.location.reload()
        }

        
    return (
        <div className="update-form">
            {update ?
            <form className="col" onSubmit={handleSubmit}>
                <div className="update-close-button">
                    <button className='close-update-button' onClick={() => setUpdate(false)}>&times;</button>
                </div>
                <input name='name' type='text' placeholder='Name Here' onChange={handleChange} value={formValues.name}></input>
                <input className="create-update" name='title' type='text' placeholder='title' onChange={handleChange} value={formValues.title}></input>
                <div className="update-close-button">
                <textarea name='body' type='text' placeholder='Body Text' onChange={handleChange} value={formValues.body} ></textarea>
                    <button className="submit-button" type='submit'>Submit Changes</button>
                </div>
            </form> : 
                <button className='update-button' onClick={() => setUpdate(true)}>Edit</button>}
        </div>
    )
}

export default UpdateReview 