import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCatFact } from '../api/catFactApi'


export const fetchCatFact = createAsyncThunk(
  'catFact/fetch',
  async () => {
    const response = await getCatFact()
    return response?.data
  }
)
export interface ICatFact {
  fact: string | undefined
}
const initialState: ICatFact = {
  fact: '',
}


export const catFactSlice = createSlice({
  name: 'catFact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCatFact.fulfilled, (state, action) => {
      state.fact=action.payload?.fact

    })
  }
})


export default catFactSlice.reducer