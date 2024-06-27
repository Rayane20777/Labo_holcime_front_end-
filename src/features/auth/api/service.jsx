/* eslint-disable no-useless-catch */
import instance from 'src/config/axiosConfig'

export const loginService = async (payload) => {
    try {
        const response = await instance.post('/login', payload)
        return response
    } catch (error) {
        throw error
    }
}

export const registerService = async (payload) => {
    try {
        const response = await instance.post('/register', payload)
        return response
    } catch (error) {
        throw error
    }
}