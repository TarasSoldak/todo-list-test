import { Box, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import './App.scss';
import AddTodo from './components/AddTodo';
import DogRandomImg from './components/DogRandomImg';
import Geolocation from './components/Geolocation';
import Header from './components/Header';
import RandomCatFact from './components/RandomCatFact';
import TodoList from './components/TodoList';
import Weather from './components/Weather';
import { useAppSelector } from './hooks/hooks';

const App: FC = () => {
  const success = useAppSelector(state => state.login.success)

  return (
    <>
      <Header/>
      {!success ? <Typography variant='h3' textAlign='center' color='error'>Send Login</Typography>
        : <>
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
      }
    </>
  );
}

export default App;
