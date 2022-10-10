import { configureStore, createSlice } from '@reduxjs/toolkit'

const id = createSlice({
  name: 'id',
  initialState: [],
  reducers: {
    setId(state, action) {
      return action.payload
    },
  },
})

export const { setId } = id.actions

const maxWidth = createSlice({
  name: 'maxWidth',
  initialState: [],
  reducers: {
    setMaxWidth(state, action) {
      return action.payload
    },
  },
})

export const { setMaxWidth } = maxWidth.actions

export default configureStore({
  reducer: {
    id: id.reducer,
    maxWidth: maxWidth.reducer,
  },
})
