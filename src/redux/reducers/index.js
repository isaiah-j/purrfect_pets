import { combineReducers } from 'redux'
import {petReducer as pets} from '../reducers/petReducer'


export default combineReducers({
    pets
})