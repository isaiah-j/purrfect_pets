import axios from 'axios'

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJNbVJnUHV0QUwwMFFuMTlxTXhWeGNuRHF1b2ZGcVlSTnZlZFlOYVQ2Z24zbjNTdURnRSIsImp0aSI6IjVmMzBjZThkNjNmODIzYmJjNjU2ZDgzMDkyNDRhNGZmMDA4NmIwNDg0NmVhZGU5ZjVkZTM5MjA4NjU0Mzg1ZWQzYjRlOWVlMzNjZTIxNmJiIiwiaWF0IjoxNTk3Mjk2MDAwLCJuYmYiOjE1OTcyOTYwMDAsImV4cCI6MTU5NzI5OTYwMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.bsXKKvvFCyxuiqU49Pj0Aya5JOCzoLJIvUbEjRKrvu3iDs9MYUHZOBvzBn-1kMAGGcbXVJYCZPUS3c9HAHDl9nDoeUj4uo5NVcYU3trEldHnLjK2jRmQ__2gXHl5-xxvpw0Mr0RhwsiK6JlCD9f6azD8jYEXh82lsc2vuKiiTnWj6tNBfopyWtcxrgz8kXR6hvo8k8NwfRGHuEIBknBoSw89Up0OPrx6JpZGsRI95OJlENLEhnUmnVOu6Po05IGzcEKSHnavyclHR7HTcDLHpRcu99zQQaYhBiynJPrhBYSaMs91UeLJ9XBwX0H8IgbV_jD0Ed05yEiKTLdeMPobwg'
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