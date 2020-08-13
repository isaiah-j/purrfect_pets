import axios from 'axios'

// don't hack my petfinder account lol
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJNbVJnUHV0QUwwMFFuMTlxTXhWeGNuRHF1b2ZGcVlSTnZlZFlOYVQ2Z24zbjNTdURnRSIsImp0aSI6ImM2YjBkNGMyNmRiNDE2ODI2ODU3MTk5MGZhZDYyNmVjNTkyMzY4NmNjNzliOTVkN2JhM2Y2ZjE1NzljOThiMGRhZTcxZjMxNTkyODcyNWU0IiwiaWF0IjoxNTk3Mjg0MDMxLCJuYmYiOjE1OTcyODQwMzEsImV4cCI6MTU5NzI4NzYzMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.Foow42-jXR0Gb1lIRroRp25kn0mYiJtC5NXTo0mPMGc7-Bbf1MQ-0uBNoJUb25I_HcNxOihiMCRKAv9k4SAp0DpRb1B61C_iw9ThMo5v3BHWjEdvdXWexU7S8Y70CexNjwpMHV-Rv18quGijbOTivmENwS2d_Mug_ImR7Egv-AAwhhm1HmvYRqd0d4uQQwOdwzJaWqsoeoLcxpbbKssWZ_wULTtxB3nqG1Yo2SUQa5EikQs3McSD1UvunUWbzr_qjspAz5zMvdI0dDnlmuXnF8qPRWjJnWpH0fYB2AVlJ36ImPqbhdUa-UGY79r-6rBXkuJYwhfJ9IsohYcKAI-ytA'
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