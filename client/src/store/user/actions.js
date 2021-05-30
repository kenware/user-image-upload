import axios from 'axios'

import slice from './reducer'
import lodash from 'lodash'

const { loginSuccess, logoutSuccess, loginError, RegisterError, loaderToggle } = slice.actions

const getErrors = (error) => {
  let newError = ''
  if (lodash.isString(error)) {
    return error
  } else {
    lodash.forOwn(error, (v, k) => {
      newError += v[0]
    })
  }
  return newError
}

export const login = ({ email, password }) => async dispatch => {
  try {
    dispatch(loaderToggle(true))
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, { email, password })
    localStorage.setItem('user', JSON.stringify(res.data))
    dispatch(loginSuccess(res.data))
    return dispatch(loaderToggle(false))
  } catch (e) {
    const error = getErrors(e.response?.data?.message)
    dispatch(loginError(error))
    dispatch(loaderToggle(false))
  }
}

export const register = (data) => async dispatch => {
  try {
    dispatch(loaderToggle(true))
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/users`, data)
    localStorage.setItem('user', JSON.stringify(res.data))
    return dispatch(loginSuccess(res.data))
  } catch (e) {
    const error = getErrors(e.response?.data?.message)
    dispatch(RegisterError(error))
    return dispatch(loaderToggle(false))
  }
}

export const setUser = (user) => dispatch => {
  try {
    return dispatch(loginSuccess(user))
  } catch (e) {
    return console.error(e.message)
  }
}

export const logout = () => async dispatch => {
  try {
    localStorage.removeItem('user')
    return dispatch(logoutSuccess())
  } catch (e) {
    return console.error(e.message)
  }
}
