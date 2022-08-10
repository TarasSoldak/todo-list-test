import { Box, Typography } from '@mui/material'
import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchCatFact } from '../store/reducers/catFactSlice'

const RandomCatFact: FC = () => {
  const { fact, isLoading, isError } = useAppSelector(state => state.catFact)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCatFact())
  }, [dispatch])


  if (isLoading) {
    return (
      <Box className='box' bgcolor='#3a2727'>
        <Typography textAlign='center' color='white' fontSize='1.5em'>loading...</Typography>
      </Box>
    )
  } else if (isError) {
    return (
      <Box className='box' bgcolor='#3a2727'>
        <Typography textAlign='center' color='error' fontSize='1.5em'>{isError}</Typography>
      </Box>
    )
  } else {
    return (
      <Box className='box' bgcolor='#3a2727'>
        <Typography mb='6px' color='#b1cde9' variant='h4' fontSize='1.6em'>Random fact about cat</Typography>
        <Typography color='#fff' fontSize='1em'>{fact}</Typography>
      </Box>
    )
  }
}

export default RandomCatFact