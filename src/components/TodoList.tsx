import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'
import { useAppSelector } from '../hooks/hooks'
import TodoItem from './TodoItem'


const TodoList: FC = () => {
  const todos = useAppSelector(state => state.todo.todo)
 

  return (

    <Box mt='20px' component='div'>
      <Box component='div'>
      <Typography variant='h5'>Todo</Typography>
      {todos.filter(todo=>todo.completed===false && todo.flooded===true).map((todo) => {
        return <TodoItem {...todo} key={todo.id} />
      })}
      {todos.filter(todo=>todo.completed===false && todo.flooded===false).map((todo) => {
        return <TodoItem {...todo} key={todo.id} />
      })}
      </Box>
      <Box mt='40px' component='div'>
        <Typography variant='h5'>Checked Todo</Typography>
      {todos.filter(todo=>todo.completed===true).map((todo) => {
        return <TodoItem {...todo} key={todo.id}/>
      })}
      </Box>
    </Box>
  )
}

export default TodoList