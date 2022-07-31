import React, { FC, useState } from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setAdd, setLoginSuccess } from '../store/reducers/loginSlice'
import { useNavigate } from 'react-router-dom'



const LoginPage: FC = () => {


  const [login, setLogin] = useState('')
  const dispatch = useAppDispatch()
  const add = useAppSelector(state => state.login.add)
  const navigate = useNavigate()



  const addLogin = () => {
    if (login === 'abcd') {
      dispatch(setLoginSuccess(true))
      dispatch(setAdd(!add))
      setLogin('')
      navigate('/main')
    } else {
      alert('send correct login')
      setLogin('')

    }
  }
  const logOut = () => {
    dispatch(setAdd(!add))
    dispatch(setLoginSuccess(false))
  }

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  }
  return (
    <Stack direction='row' justifyContent='center' mt='100px'>
      {!add ?
        <Button onClick={logOut} variant='contained'>
          Logout
        </Button>
        : <>
        <Typography mr='10px' variant='h4'>Add Login</Typography>
          <TextField
            variant="outlined"
            placeholder='login'
            value={login}
            onChange={handleLogin}
            size='small'
          />
          <Button onClick={addLogin} size="medium" color='error' variant="contained">Add</Button>
        </>
      }
    </Stack>
  )
}


export default LoginPage