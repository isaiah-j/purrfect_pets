import axios from 'axios'

const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJNbVJnUHV0QUwwMFFuMTlxTXhWeGNuRHF1b2ZGcVlSTnZlZFlOYVQ2Z24zbjNTdURnRSIsImp0aSI6IjA2OTZhMTg2ZTcxMGE0Yzg5YjgyYWJlM2MxYzc5MWI1OWI2ZDQ2MDU3YjhiODYzZTBmNzY1NTNhZjNlOWE1NDE1ZjczOTg5M2ZlOTFmNDIwIiwiaWF0IjoxNTk3MjkxMzk2LCJuYmYiOjE1OTcyOTEzOTYsImV4cCI6MTU5NzI5NDk5Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.rbZDzzqp5gOjhbXywu9-wRzxGnAf1c7SEd8NUgYHBKQBfw1zxcZ9CCWF0qdrFGlg8wlLrXaSgs4a_5-vaF4gRhKyJqJwyLBgyP4xx3xWp7DDumse1lOPMQ1JZcSog3h0YRG0e2J-fVY5yXGHbXCZbYuUhIolaxxdcMZeo-01gq-nIrN2QJTuDo76uO_kmp5V5kzdZGeubijvT7JrNoKJb5e9tJXd6pj3SrZm00j1lCHFnORr-LkORyaWz3I7GIlUiLNtAVjkdiMhqebG79SAix3tdNMZjttJgBRAIRKNrar5Fu0CwV46NVEJi5swPQaJ_RPHo-2RMWK6xAO1pMXWow"
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
    return (dispatch) => {
        console.log('inside get pet action')
        dispatch({ type: 'GET_PET'})
    }
}