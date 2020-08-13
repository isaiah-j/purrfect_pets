const initialState = {
    isFetching: false,
    errors: [],
    pets: [
        { name: 'roof', description: 'bitch im a dog woof', photos: [] }, 
        { name: 'roof', description: 'bitch im a dog woof', photos: [] },
        { name: 'roof', description: 'bitch im a dog woof', photos: [] },
        { name: 'roof', description: 'bitch im a dog woof', photos: [] },
        { name: 'roof', description: 'bitch im a dog woof', photos: [] },
        { name: 'roof', description: 'bitch im a dog woof', photos: [] },
        { name: 'roof', description: 'bitch im a dog woof', photos: [] },
        { name: 'roof', description: 'bitch im a dog woof', photos: [] },
        { name: 'roof', description: 'bitch im a dog woof', photos: [] },
        { name: 'roof', description: 'bitch im a dog woof', photos: [] },
        { name: 'roof', description: 'bitch im a dog woof', photos: [] },
        { name: 'roof', description: 'bitch im a dog woof', photos: [] },
        { name: 'roof', description: 'bitch im a dog woof', photos: [] },
        { name: 'roof', description: 'bitch im a dog woof', photos: [] },
        { name: 'roof', description: 'bitch im a dog woof', photos: [] },
        { name: 'roof', description: 'bitch im a dog woof', photos: [] },
        { name: 'roof', description: 'bitch im a dog woof', photos: [] },
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