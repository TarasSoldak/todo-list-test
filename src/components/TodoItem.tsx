
import { Box, Button, Checkbox, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { changeFlooded, deleteTodo, ITodo, toggleCheckbox } from '../store/todoSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';




const TodoItem: FC<ITodo> = ({ date, title, completed, id, flooded }) => {

  const dispatch = useAppDispatch()

  const changeCheckBox = (id: number) => {
    dispatch(toggleCheckbox(id))
  }
  const onDelete = (id: number) => {
    window.alert('You sure')
    dispatch(deleteTodo(id))
  }
  const onFlooded = (id: number) => {
    dispatch(changeFlooded(id))
  }

  return (
    <Stack
      padding='7px' borderRadius='6px' boxShadow='0 0 4px #1976d2'
      marginTop='15px' direction="row" alignItems='center' justifyContent='space-between'>
      <Box display='flex' alignItems='center'>
        <Checkbox onClick={() => changeCheckBox(id)}
          checked={completed}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Box display='flex' alignItems='center' component='div'>
          <Typography variant='h6' fontSize='1em' fontWeight='bold'>
            {date}
            <span className={!completed ? 'title' : 'title spanThrough'}>{title}</span>
          </Typography>
        </Box>
      </Box>
      <Box>
        <Checkbox onClick={() => onFlooded(id)}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={flooded}
        />
        <Button color='error' onClick={() => onDelete(id)} size='small' variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </Box>
    </Stack>

  )
}

export default TodoItem