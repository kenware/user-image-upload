import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import userSlice from './user/reducer'
import leadSlice from './dashboard/reducer'

const reducer = combineReducers({
  user: userSlice.reducer,
  image: leadSlice.reducer
})

const store = configureStore({
  reducer
})
export default store
