import Client from './Api'

export const GetBooks = async () => {
    try {
        const res = await Client.get('/books')
        return res.data
    } catch (error) {
        throw error 
    }
}