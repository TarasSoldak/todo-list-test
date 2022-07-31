import { getGeolocation } from '../../api/geolocationApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchGeolocation = createAsyncThunk(
  'geo/fetch',
  async () => {
    const response = await getGeolocation()
    return response?.data
  }
)

export interface IGeo {
  country: string 
  city:string,
  lat:number,
  lon:number,
  regionName:string

}



const initialState: IGeo = {
  country: '',
  city:'',
  lat:0,
  lon:0,
  regionName:''
}

export const geoSlice = createSlice({
  name: 'geo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGeolocation.fulfilled, (state, action) => {
      state = Object.assign(state, action.payload)
  
    })
  },
})


export default geoSlice.reducer