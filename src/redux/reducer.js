import { combineReducers } from 'redux'
import user from './reducers/userReducer'
import app from './reducers/appReducer'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001/api/v1'

const globalReducer = combineReducers({ app, user })

export default globalReducer
