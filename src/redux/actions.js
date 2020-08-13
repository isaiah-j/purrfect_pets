import axios from 'axios'

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJNbVJnUHV0QUwwMFFuMTlxTXhWeGNuRHF1b2ZGcVlSTnZlZFlOYVQ2Z24zbjNTdURnRSIsImp0aSI6ImFjM2NkOTM2MTllMjc3OWUyNDI5OTQ5ZjhiMGU3MzlmMjM3ZWExNjc1M2JmZmJiMTMxZDA5YTAxYjkwMjM5MGNlYjM4NDBiZGU1YTY1MWYzIiwiaWF0IjoxNTk3MzAxNDA3LCJuYmYiOjE1OTczMDE0MDcsImV4cCI6MTU5NzMwNTAwNywic3ViIjoiIiwic2NvcGVzIjpbXX0.TgnJSajb5ju_mrDzi4hbYhK6JnPS2qGLvgmnJ-ijMzq7PvJ4bnpSswUTO1Niq_SK3Ez0miH9xgop1AWFdQ9DrY5ZX4us3qmypNrJ_3iEyJfgi5SrRQbL2FrBfYcOXf-LM2Y_ZJhPyb4kU_AX88Gpr9YGLFkxFyEdGVITE-3eeFiMdGjZ2UtsFdLLezUu8A2ndTzz026I3QBdV5XG60S1KQ4lc4JZxoD55yeDTQMjKX6iXOFCjS4XdDYB6qYE_AYSUnm_SJw7VtJQYpQLAde1u2zXAg_KhHMCANJUciKh28g-kaObsSYIf6u8AFMFPG3kctPNjPc8bu0ARNQMSgFBrg'
export const getPets = (formValues) => {
    const { location, breed, age, type, size, color } = formValues
    return async dispatch => {
        dispatch({ type: 'GET_PETS_START' })
        try {
            const response = await axios.get(
                `https://api.petfinder.com/v2/animals`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                },
                params: {
                    location,
                    type
                }
            })
            let animals = response.data.animals
            dispatch({ type: 'GET_PETS', payload: animals })
        } catch (error) {
            dispatch({ type: 'ERROR_FETCHING_PETS' })
        }
    }
}

export const getPet = (id) => {
    return async (dispatch) => {
        dispatch({ type: 'GET_PET_START' })
        try {
            const response = await axios.get(`https://api.petfinder.com/v2/animals/${id}`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            })
            const animal = response.data.animal
            dispatch({ type: 'GET_PET', payload: animal })
        } catch (error) {
            console.log('API Key Missing')
        }

    }
}