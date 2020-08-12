import { combineReducers } from 'redux'
import {petReducer as pet} from '../reducers/petReducer'


export default combineReducers({
    pet
})