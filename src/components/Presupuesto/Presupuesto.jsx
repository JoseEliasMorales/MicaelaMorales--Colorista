import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import './presupuesto.css'
import { Button, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import pelo from './pelomujer.jpg'
import Estilos from '../Estilos/Estilos'
import AgregarServicio from '../AgregarServicio/AgregarServicio'

const Presupuesto = () => {
  const [estilo, setEstilo] = useState('')
  const [agregar, setAgregar] = useState(false)
  console.log(estilo)

  const handleChange = (event) => {
    event.preventDefault()
    setEstilo(event.target.value)
  }

  return (
    <>
      <Container className='contenedorPresupuesto'>
        <h3 className='title title--presupuesto'>Armemos tu presupuesto</h3>
        <p className='subTitle subTitle--presupuesto'>Que cambio le quieres hacer a tu cabello?</p>
        <FormControl fullWidth style={{ marginTop: '1rem' }}>
          <InputLabel id='demo-simple-select-label' className='name'>Estilo</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={estilo}
            label='Trabajo'
            onChange={handleChange}
            className='name'
          >
            <MenuItem className='name' value={1}>Corte</MenuItem>
            <MenuItem className='name' value={2}>Corte y Lavado</MenuItem>
            <MenuItem className='name' value={3}>Lavado, Corte y Secado</MenuItem>
            <MenuItem className='name' value={4}>Color en Raices</MenuItem>
            <MenuItem className='name' value={5}>Color Global</MenuItem>
            <MenuItem className='name' value={6}>Mechas</MenuItem>
            <MenuItem className='name' value={7}>Balayage</MenuItem>
            <MenuItem className='name' value={8}>Nutrición</MenuItem>
            <MenuItem className='name' value={9}>Otro...</MenuItem>
          </Select>
        </FormControl>
        {
            estilo && estilo < 5 && agregar === false
              ? <><Button variant='text' onClick={() => setAgregar(true)}>Agregar Servicio</Button><Button variant='text'>Calcular</Button></>
              : undefined
        }
        {
            estilo && estilo > 4
              ? <Estilos />
              : undefined
        }
        {
            agregar
              ? <AgregarServicio />
              : false
        }
      </Container>
    </>
  )
}

export default Presupuesto
