import { Box, Typography } from '@mui/material'
import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchCatFact } from '../store/catFactSlice'

const RandomCatFact:FC = () => {
  const fact = useAppSelector(state => state.catFact.fact)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCatFact())
  }, [dispatch])

  return (
    <Box  className='box'  bgcolor='#3a2727'>
      <Typography mb='6px' color='#b1cde9' variant='h4' fontSize='1.6em'>Random fact about cat</Typography>
      <Typography color='#fff' fontSize='1em'>{fact}</Typography>
      </Box>
  )
}

export default RandomCatFact