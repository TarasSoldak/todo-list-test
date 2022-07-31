import { Box, Card, CardMedia, Typography } from '@mui/material'
import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchRandomImg } from '../store/reducers/dogRandomImgSlice'

const DogRandomImg: FC = () => {

  const img = useAppSelector(state => state.dogImg.img)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRandomImg())
  }, [dispatch])
  
  return (
    <Box bgcolor='#2a2f4e' className='box' display= 'flex' alignItems='center'
    justifyContent='space-around'
    >
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          alt="dog img"
          height={180}
          image={img}
        />
      </Card>
      <Typography color='#cfb0b0' variant='h5'>Random Photo</Typography>

    </Box>
  )
}

export default DogRandomImg