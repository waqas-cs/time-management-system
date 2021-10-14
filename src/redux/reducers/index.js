import signupReducer from './signupReducer'
import loginReducer from './loginReducer'
import signUpUserReducer from './signupUserReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({

    signupReducer,
    loginReducer,
    signUpUserReducer
})

export default rootReducer