import { combineReducers } from 'redux'
import { petsReducer as pets } from './petsReducer'
import {petReducer as pet} from './petReducer'

export default combineReducers({
    pets,
    pet
})