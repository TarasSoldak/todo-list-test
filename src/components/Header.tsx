import { Button, TextField, Typography } from '@mui/material'
import React, { FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setAdd, setLoginSuccess } from '../store/loginSlice'




const Header: FC = () => {
  const [login, setLogin] = useState('')
  const dispatch = useAppDispatch()
  const add = useAppSelector(state => state.login.add)



  const addLogin = () => {
    if (login === 'abcd') {
      dispatch(setLoginSuccess(true))
      dispatch(setAdd(!add))
      setLogin('')
    }
  }
  const logOut = () => {
    dispatch(setAdd(!add))
    dispatch(setLoginSuccess(false))


  }

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };
  return (
    <header>
      {!add ?
        <Typography onClick={logOut}
          color='#ffff'
          variant='h5'>
          Logout
        </Typography>
        : <>
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
    </header>
  )
}

export default Header
