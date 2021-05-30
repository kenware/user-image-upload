import { createSlice } from '@reduxjs/toolkit'

const leadSlice = createSlice({
  name: 'lead',
  initialState: {
    image: {},
    images: []
  },
  reducers: {
    GetImagesSuccess: (state, action) => {
      state.images = action.payload
    },
    GetImageSuccess: (state, action) => {
      state.image = action.payload
    }
  }
})

export default leadSlice
