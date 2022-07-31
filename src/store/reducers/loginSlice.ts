import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface ILogin{
  success:boolean
  add:boolean
}


const initialState:ILogin = {
  success:false,
  add:true
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginSuccess: (state: { success: boolean }, action:PayloadAction<boolean>) => {
      state.success=action.payload
    },
    setAdd: (state: { add: boolean }, action:PayloadAction<boolean>) => {
      state.add=action.payload
    },

  },
})

export const {setLoginSuccess,setAdd } = loginSlice.actions

export default loginSlice.reducer