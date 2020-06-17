import {combineReducers} from 'redux'

import app from './app'
import auth from './auth'
import content from './content'
import user from './user'
import login from './login'

const rootReducer = combineReducers({app, auth, content, user,login})

export default rootReducer