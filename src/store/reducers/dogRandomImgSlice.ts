import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getRandomImg } from '../../api/dogRandomImgApi'


export const fetchRandomImg = createAsyncThunk(
  'randomImg/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await getRandomImg()
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('Somthing wrong')
    }

  }
)

export interface IDogImg {
  img: string 
  isLoading: boolean
  isError: string
}
const initialState: IDogImg = {
  img: '',
  isLoading: true,
  isError: ''
}


export const dogImgSlice = createSlice({
  name: 'catFact',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRandomImg.fulfilled.type]: (state, action) => {
      state.isLoading = false
      state.isError = ''
      state.img = action.payload.message
    },
    [fetchRandomImg.pending.type]: (state) => {
      state.isLoading = true
     
    },
    [fetchRandomImg.rejected.type]: (state, action) => {
      state.isLoading = false
      state.isError = action.payload
     
    }
  }
})


export default dogImgSlice.reducer