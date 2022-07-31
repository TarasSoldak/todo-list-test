
import { Box, Button, Checkbox, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { ITodo,  } from '../store/reducers/todoSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

interface TodoItemProps{
  todo:ITodo
  changeCheckBox:(id:number)=>void
  onFlooded:(id:number)=>void
  onDelete:(id:number)=>void
}




const TodoItem: FC<TodoItemProps> = ({ todo, changeCheckBox, onFlooded, onDelete}) => {


  return (
    <Stack
      padding='7px' borderRadius='6px' boxShadow='0 0 4px #1976d2'
      marginTop='15px' direction="row" alignItems='center' justifyContent='space-between'>
      <Box display='flex' alignItems='center'>
        <Checkbox onClick={() => changeCheckBox(todo.id)}
          checked={todo.completed}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Box display='flex' alignItems='center' component='div'>
          <Typography variant='h6' fontSize='1em' fontWeight='bold'>
            {todo.date}
            <span className={!todo.completed ? 'title' : 'title spanThrough'}>{todo.title}</span>
          </Typography>
        </Box>
      </Box>
      <Box>
        <Checkbox onClick={() => onFlooded(todo.id)}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={todo.flooded}
        />
        <Button color='error' onClick={() => onDelete(todo.id)} size='small' variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </Box>
    </Stack>

  )
}

export default TodoItem