import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getWeather } from '../../api/weatherApi';


export const fetchWheather = createAsyncThunk(
  'whether/fetch',
  async (_, thunkAPI) => {
    try{
      const response = await getWeather()
      return response?.data
    }catch(error){
      return thunkAPI.rejectWithValue('Somthing wrong')
    }
 
  }
)
export interface IW {
  name: string | undefined
  main: {
    temp: number 
    pressure: number 
    humidity: number 
  }
  isLoading: boolean
  isError: string 
}


const initialState: IW = {
  name: '',
  main: {
    temp: 0, 
    pressure: 0, 
    humidity: 0, 
  },
  isLoading: true,
  isError: '' 
}


export const wheatherSlice = createSlice({
  name: 'wheather',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWheather.fulfilled.type]: (state, action) => {
      state.isLoading = false
      state.isError = ''
      state.name = action.payload?.name
      state.main = {...state.main, ...action.payload?.main}
    },
    [fetchWheather.pending.type]: (state) => {
      state.isLoading = true
      
    },
    [fetchWheather.rejected.type]: (state, action) => {
      state.isLoading = false
      state.isError = action.payload
    },
  },
})


export default wheatherSlice.reducer