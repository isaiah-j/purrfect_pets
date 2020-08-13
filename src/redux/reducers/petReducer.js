const INITIAL_STATE = {
    errors: [],
    isFetching: null,
    pet: {}
}

export const petReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_PET_START':
            return { ...state, isFetching: true }
        case 'GET_PET':
            return {
                ...state,
                pet: action.payload
            }
            return state
        default:
            return state
    }
}