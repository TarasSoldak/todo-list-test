import { Box, Stack, Typography } from '@mui/material'
import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchWheather } from '../store/reducers/weatherSlice'

const Weather: FC = () => {
  const { name, main, isLoading, isError } = useAppSelector(state => state.wheather)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchWheather())
  }, [dispatch])
  if (isLoading) {
    return (
      <Box width='50%' boxShadow='0 0 8px #012066' bgcolor='#012066'
        margin='5px'
        color='#c20f2d'
        borderRadius='10px'
      >
        <Typography textAlign='center' mt='10px' color='white' fontSize='1.5em'>loading...</Typography>
      </Box>
    )
  } else if (isError) {
    return (
      <Box width='50%' boxShadow='0 0 8px #012066' bgcolor='#012066'
        margin='5px'
        color='#c20f2d'
        borderRadius='10px'
      >
        <Typography textAlign='center' mt='25%' color='error' fontSize='1.5em'>{isError}</Typography>
      </Box>
    )
  } else {
    return (
      <Box width='50%' boxShadow='0 0 8px #012066' bgcolor='#012066'
        margin='5px'
        color='#c20f2d'
        borderRadius='10px'
      >
        <Typography component='h3' fontSize='1.4em' textAlign='center' pt='5px'>
          Weather in {name}
        </Typography>
        <Stack direction='row' justifyContent='space-around' mt='10px'>
          <Typography component='p' lineHeight={2} fontSize='1.2em' fontWeight='700'>
            temp:<br />
            humidity:<br />
            pressure:
          </Typography>
          <Typography component='p' lineHeight={2} color='#fff' fontSize='1.2em'>
            {main.temp}<br />
            {main.humidity}<br />
            {main.pressure}
          </Typography>
        </Stack>
      </Box>
    )
  }
}

export default Weather