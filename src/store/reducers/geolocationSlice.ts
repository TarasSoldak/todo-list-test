import { getGeolocation } from '../../api/geolocationApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchGeolocation = createAsyncThunk(
  'geo/fetch',
  async (_, thunkAPI) => {
    try{
      const response = await getGeolocation()
      return response?.data
    }catch(error){
      return thunkAPI.rejectWithValue('Somthing wrong')
    }
 
  }
)

export interface IGeo {
  country: string 
  city:string,
  lat:number,
  lon:number,
  regionName:string
  isLoading: boolean
  isError: string

}



const initialState: IGeo = {
  country: '',
  city:'',
  lat:0,
  lon:0,
  regionName:'',
  isLoading: true,
  isError: ''
}

export const geoSlice = createSlice({
  name: 'geo',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGeolocation.fulfilled.type]:(state, action) => {
      state.isLoading = false
      state.isError = ''
      state = Object.assign(state, action.payload)
  
    },
    [fetchGeolocation.pending.type]:(state) => {
      state.isLoading = true
    },

    [fetchGeolocation.rejected.type]:(state, action) => {
      state.isLoading = false
      state.isError = action.payload
  
    },
  },
})


export default geoSlice.reducer