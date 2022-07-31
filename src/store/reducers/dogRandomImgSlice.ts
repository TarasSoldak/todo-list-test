import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getRandomImg } from '../../api/dogRandomImgApi'


export const fetchRandomImg = createAsyncThunk(
  'randomImg/fetch',
  async () => {
    const response = await getRandomImg()
    return response?.data
  }
)
export interface IDogImg {
  img: string | undefined
}
const initialState: IDogImg = {
  img: '',
}


export const dogImgSlice = createSlice({
  name: 'catFact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomImg.fulfilled, (state, action) => {
      state.img=action.payload.message

    })
  }
})


export default dogImgSlice.reducer