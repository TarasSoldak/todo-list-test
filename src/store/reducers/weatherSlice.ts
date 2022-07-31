import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getWeather } from '../../api/weatherApi';


export const fetchWheather = createAsyncThunk(
  'whether/fetch',
  async () => {
    const response = await getWeather()
    return response?.data
  }
)
export interface IW {
  name: string | undefined
  main: {
    temp: number 
    pressure: number 
    humidity: number 
  } 
}


const initialState: IW = {
  name: '',
  main: {
    temp: 0, 
    pressure: 0, 
    humidity: 0, 
  } 
}


export const wheatherSlice = createSlice({
  name: 'wheather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWheather.fulfilled, (state, action) => {
      state.name = action.payload?.name
      state.main = {...state.main, ...action.payload?.main}

    })
  },
})


export default wheatherSlice.reducer