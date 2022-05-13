import Client from './Api'

export const GetBooks = async () => {
    try {
        const res = await Client.get('/books')
        return res.data
    } catch (error) {
        throw error 
    }
}

export const GetBookDetails = async () => {
    try {
        const res = await Client.get(`/books/:book_id`)
        return res.data
    } catch (error) {
        throw error 
    }
}

export const DeleteReview = async (id) => {
    try {
        const res = await Client.delete(`/reviews/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}
