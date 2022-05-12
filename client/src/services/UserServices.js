import Client from './Api'

export const GetBooks = async () => {
    try {
        const res = await Client.get('/books')
        return res.data
    } catch (error) {
        throw error 
    }
}

export const GetBookDetails = async (id) => {
    try {
        const res = await Client.get(`/books/${id}`)
        return res.data
    } catch (error) {
        throw error 
    }
}

// export const GetReviewDetails = async (id) => {
//     try {
//         const res = await Client.get(`/reviews/${id}`)
//         return res.data
//     } catch (error) {
//         throw error 
//     }
// }

