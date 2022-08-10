import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCatFact } from '../../api/catFactApi'


export const fetchCatFact = createAsyncThunk(
  'catFact/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await getCatFact()
      return response?.data
    } catch (error) {
      return thunkAPI.rejectWithValue('Somthing wrong')
    }

  }
)
export interface ICatFact {
  fact: string
  isLoading: boolean
  isError: string
}
const initialState: ICatFact = {
  fact: '',
  isLoading: true,
  isError: ''
}


export const catFactSlice = createSlice({
  name: 'catFact',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCatFact.fulfilled.type]: (state, action) => {
      state.isLoading = false
      state.isError = ''
      state.fact = action.payload?.fact
    },
    [fetchCatFact.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchCatFact.rejected.type]: (state, action) => {
      state.isLoading = false
      state.isError = action.payload
    }
  }
})


export default catFactSlice.reducer