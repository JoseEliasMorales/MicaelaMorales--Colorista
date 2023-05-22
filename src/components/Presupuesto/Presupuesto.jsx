import React from 'react'
import Box from '@mui/material/Box'
import './presupuesto.css'
import { Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import pelo from './pelo.png'

const Presupuesto = () => {
  return (
    <>
      <Box className='semicircle' />
      <Box style={{ textAlign: 'center' }}>
        <Box padding='1rem' position='relative' minWidth='100%' sx={{ backgroundColor: '#ddd1c5' }}>
          <h2 className='title'>Armemos tu presupuesto</h2>
          <h3>Que Cambios le queres hacer a tu cabello?</h3>
        </Box>
        <FormControl className='formCorte'>
          <FormLabel id='corte-banio-color'>Estas buscando hacerte un corte, color en raices o un baño de luz?
            <RadioGroup row aria-labelledby='corte-banio-color' name='row-corte'>
              <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box maxWidth='50%'>
                  <FormControlLabel value='corte' control={<Radio />} label='Corte' />
                  <FormControlLabel value='corte y lavado' control={<Radio />} label='Corte y Lavado' />
                  <FormControlLabel value='corte y Secado' control={<Radio />} label='Corte y Secado' />
                </Box>
                <Box>
                  <FormControlLabel value='color en raices' control={<Radio />} label='Color en Raices' />
                  <FormControlLabel value='banio de luz' control={<Radio />} label='Baño de Luz' />
                </Box>
              </Container>
            </RadioGroup>
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel id='largo'>Cual es tu largo?</FormLabel>
          <RadioGroup row aria-labelledby='largo' name='pelo-largo'>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <img src={pelo} alt=' ' style={{ width: '64px' }} />
              <FormControlLabel value='corto' control={<Radio />} label='Corto' />
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <img src={pelo} alt=' ' />
              <FormControlLabel value='hombros' control={<Radio />} label='Sobre los hombros' />
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <img src={pelo} alt=' ' />
              <FormControlLabel value='debajo de hombros' control={<Radio />} label='Debajo de los hombros' />
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <img src={pelo} alt=' ' />
              <FormControlLabel value='espalda' control={<Radio />} label='Media espalda' />
            </Box>
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id='tipo-cabello'> Cantidad de cabello?</FormLabel>
          <RadioGroup row aria-labelledby='tipo-cabello' name='cantidad'>
            <FormControlLabel value='poco' control={<Radio />} label='Poco' />
            <FormControlLabel value='normal' control={<Radio />} label='Normal' />
            <FormControlLabel value='mucho' control={<Radio />} label='Mucho' />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id='procesos'>Tienes procesos quimicos previos?</FormLabel>
          <RadioGroup row aria-labelledby='procesos' name='procesos-quimicos'>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <FormControlLabel value='natural' control={<Radio />} label='Cabello Natural' />
              <p>Sin color ni tratamientos con formol</p>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <FormControlLabel value='color' control={<Radio />} label='Color' />
              <p>Cualquier clase de tinte, ya sea tono sobre tono o amoniaco</p>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <FormControlLabel value='decoloracion' control={<Radio />} label='Decoloracion' />
              <p> </p>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <FormControlLabel value='formol' control={<Radio />} label='Con formol' />
              <p>Ya sean alizados, Keratinas o Botox</p>
            </Box>
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  )
}

export default Presupuesto
