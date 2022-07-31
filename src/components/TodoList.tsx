import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import TodoItem from './TodoItem'
import { changeFlooded, deleteTodo, toggleCheckbox } from '../store/reducers/todoSlice';



const TodoList: FC = () => {
  const todos = useAppSelector(state => state.todo.todo)

  const dispatch = useAppDispatch()

  const changeCheckBox = (id: number) => {
    dispatch(toggleCheckbox(id))
  }
  const onDelete = (id: number) => {
   const result= window.confirm('You sure')
   if(result===true){
    dispatch(deleteTodo(id))
   }
  }
  const onFlooded = (id: number) => {
    dispatch(changeFlooded(id))
  }

  return (

    <Box mt='20px' component='div'>
      <Box component='div'>
        <Typography variant='h5'>Todo</Typography>
        {todos.slice().sort((x, y) => Number(y.flooded) - Number(x.flooded))
        .filter(todo => todo.completed === false).map((todo) => {
          return <TodoItem todo={todo} 
          key={todo.id} 
          changeCheckBox={changeCheckBox} 
          onDelete={onDelete}
          onFlooded={onFlooded}
          />
        })}

      </Box>
      <Box mt='40px' component='div'>
        <Typography variant='h5'>Checked Todo</Typography>
        {todos.filter(todo => todo.completed === true).map((todo) => {
          return <TodoItem todo={todo} 
          key={todo.id} 
          changeCheckBox={changeCheckBox} 
          onDelete={onDelete}
          onFlooded={onFlooded}
          />
        })}
      </Box>
    </Box>
  )
}

export default TodoList