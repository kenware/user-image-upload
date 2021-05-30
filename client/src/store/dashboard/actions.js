/* eslint-disable no-new */
import axios from 'axios'
import lodash from 'lodash'
import { AlertModal } from '../../components/modals/modalAlert'
import slice from './reducer'
import userSlice from '../user/reducer'
import Notify from '../utils/toast'

const { GetImagesSuccess, GetImageSuccess } = slice.actions
const { loaderToggle } = userSlice.actions

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

export const getImages = () => async dispatch => {
  try {
    dispatch(loaderToggle(true))
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/images`)
    console.log(res)
    dispatch(GetImagesSuccess(res.data))
    return dispatch(loaderToggle(false))
  } catch (e) {
    const error = getErrors(e.response?.data?.message)
    dispatch(loaderToggle(false))
    AlertModal('Request Info', error, 'warning')
  }
}

export const saveImage = (data) => async dispatch => {
  try {
    dispatch(loaderToggle(true))
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/images/upload`, data)
    dispatch(GetImageSuccess(res.data))
    Notify('New image added', 10000)
    return dispatch(getImages())
  } catch (e) {
    const error = getErrors(e.response?.data?.message)
    dispatch(loaderToggle(false))
    AlertModal('Request Info', error, 'warning')
  }
}
