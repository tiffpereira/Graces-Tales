import Client from './Api'


export const RegisterUser = async (data) => {
    try {
      const res = await Client.post('users/', data)
      return res.data
    } catch (error) {
      throw error
    }
  }