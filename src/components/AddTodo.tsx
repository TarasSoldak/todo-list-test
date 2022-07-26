import { Button, Stack, TextField, Typography } from '@mui/material'
import React, { FC, useState } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { addTodo } from '../store/todoSlice'

const AddTodo:FC = () => {
  const [title, setTitle] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const addNewTodo = () => {
    if (title) {
      window.alert('You sure')
      let today = new Date();
      let date = `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}`;
      dispatch(addTodo({ date, title, id: Date.now(), completed: false, flooded: false }))
      setTitle('')
    }
  }

  return (
    <>
      <Typography variant='h3' >
        Todo LIst
      </Typography>
      <Stack direction='row'>
        <TextField
          sx={{ width: { lg: '100%'}}}
          variant="outlined"
          placeholder='add todo'
          value={title}
          onChange={handleInputChange}
          size='small'
        />
        <Button size="small" variant="contained" onClick={addNewTodo}>Add</Button>
      </Stack>
    </>
  )
}

export default AddTodo