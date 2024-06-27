import { fetchMediumsService } from "./service"

export const fetchMediums = async () => {

    try {
        const response = await fetchMediumsService()
        return response.data.data
    } catch (error) {
        console.log('Error', error)
        throw error
    }
}