import React, { FC } from 'react'
import { Box, Stack } from '@mui/material';

import AddTodo from '../components/AddTodo';
import DogRandomImg from '../components/DogRandomImg';
import Geolocation from '../components/Geolocation';
import TodoList from '../components/TodoList';
import Weather from '../components/Weather';
import RandomCatFact from '../components/RandomCatFact';

const MainPage:FC = () => {
  return (
    <>
    <Stack direction='row' justifyContent='space-between' p='25px' height='100vh'>
      <Box width='57%'>
        <AddTodo />
        <TodoList />
      </Box>
      <Stack direction='column' width='40%'>
        <Box display='flex'>
          <Geolocation />
          <Weather />
        </Box>
        <RandomCatFact />
        <DogRandomImg />
      </Stack>
    </Stack>
  </>
  )
}

export default MainPage
