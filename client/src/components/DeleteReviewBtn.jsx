import { useNavigate } from "react-router-dom";
import { DeleteReview } from "../services/UserServices";

const DeleteReviewBtn = ( { id } ) => {
    let navigate = useNavigate()

    const handleDelete = async () => {
        await DeleteReview(id)
        navigate('/books/:id')
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteReviewBtn

