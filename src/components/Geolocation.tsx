import { Box, Stack, Typography } from '@mui/material'
import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchGeolocation } from '../store/reducers/geolocationSlice'

const Geolocation: FC = () => {
  const { country, city, lat, lon, regionName } = useAppSelector(state => state.geo)

  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(fetchGeolocation())
  }, [dispatch])

  return (

    <Box
      className='box'
      width='50%'
      color='yellow'
      bgcolor='#1976d2'
    >
      <Stack direction='row' mb='1.4em' justifyContent='space-between' alignItems={'baseline'}>
        <Typography fontSize='1.4em'>{country}</Typography>
        <Typography fontSize='1.1em'>{city}</Typography>
      </Stack>
      <Typography color='#585555' display='flex' justifyContent='space-around' width='90%'>
        <Typography component='span' color='#dfd9d9' fontSize='1.2em'>
          Latitude:<br />
          Longitude:
        </Typography>
        <Typography component='span' fontWeight='700' fontSize='1.2em'>
          {lat}<br />
          {lon}
        </Typography>
      </Typography>
      <Typography mt='1.9em' fontSize='1em'>{regionName}</Typography>
    </Box>
  )
}

export default Geolocation