import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import debajo from './debajohombros.png'
import corto from './corto.png'
import sobre from './sobre.png'
import pelolargo from './pelolargo.png'
import './estilos.css'
import Cantidad from '../Cantidad/Cantidad'

const Estilos = () => {
  const [largo, setLargo] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    setLargo(event.target.value)
  }
  return (
    <>
      <FormControl fullWidth style={{ marginTop: '1rem' }}>
        <InputLabel style={{ display: 'flex' }} id='demo-simple-select-label' className='name'>Largo de Cabello</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={largo}
          label='Largo de Cabello'
          onChange={handleChange}
          className='name'
        >
          <MenuItem className='name' value={1}><img src={corto} alt='icono cabello corto' />Corto</MenuItem>
          <MenuItem className='name' value={2}><img src={sobre} alt='icono cabello sobre los hombros' />Sobre los hombros</MenuItem>
          <MenuItem className='name' value={3}><img src={debajo} alt='icono cabello debajo de los hombros' />Debajo de los hombros</MenuItem>
          <MenuItem className='name' value={4}><img src={pelolargo} alt='icono cabello largo' />Media espalda</MenuItem>
        </Select>
      </FormControl>
      {
        largo
          ? <Cantidad />
          : undefined
      }
    </>
  )
}

export default Estilos
