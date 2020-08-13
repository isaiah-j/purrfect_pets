const initialState = {
    isFetching: false,
    errors: [],
    pets: [
        {id: 2, name: 'roof', description: 'bitch im a dog woof', photos: [] },
        {id: 3, name: 'roof', description: 'bitch im a dog woof', photos: [] }, 
        {id: 4, name: 'roof', description: 'bitch im a dog woof', photos: [] },
        {id: 5, name: 'roof', description: 'bitch im a dog woof', photos: [] },
        {id: 6, name: 'roof', description: 'bitch im a dog woof', photos: [] },
        {id: 7, name: 'roof', description: 'bitch im a dog woof', photos: [] },
        {id: 8, name: 'roof', description: 'bitch im a dog woof', photos: [] },
        {id: 9, name: 'roof', description: 'bitch im a dog woof', photos: [] },
        {id: 10, name: 'roof', description: 'bitch im a dog woof', photos: [] },
        {id: 11, name: 'roof', description: 'bitch im a dog woof', photos: [] },
        {id: 12, name: 'roof', description: 'bitch im a dog woof', photos: [] },
        {id: 13, name: 'roof', description: 'bitch im a dog woof', photos: [] },
        {id: 14, name: 'roof', description: 'bitch im a dog woof', photos: [] },
        {id: 15, name: 'roof', description: 'bitch im a dog woof', photos: [] },
        {id: 16, name: 'roof', description: 'bitch im a dog woof', photos: [] },
        {id: 17, name: 'roof', description: 'bitch im a dog woof', photos: [] },
        {id: 18, name: 'roof', description: 'bitch im a dog woof', photos: [] },
    ]
}


export const petReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PETS_START':
            return {
                ...state,
                isFetching: true
            }
        case 'GET_PETS':
            console.log('get pets triggered')
            return {
                ...state,
                isFetching: false,
                pets: action.payload
            }
        case 'ERROR_FETCHING_PETS':
            console.log('some error occured')
            return { ...state }
        default:
            return state
    }
}