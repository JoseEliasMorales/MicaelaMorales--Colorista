import React, { useState } from 'react'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const AgregarNutricion = () => {
  const [agregar, setAgregar] = useState('')

  const handleChange = (event) => {
    event.preventDefault()

    setAgregar(event.target.value)
  }
  return (
    <>
      <FormControl fullWidth style={{ marginTop: '1rem' }}>
        <InputLabel id='demo-simple-select-label' className='name'>Tratamiento</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={agregar}
          label='Tratamiento'
          onChange={handleChange}
          className='name'
        >
          <MenuItem className='name' value={1}>Nutrición</MenuItem>
        </Select>
      </FormControl>
      {
        agregar
          ? <Button variant='text'>Calcular</Button>
          : false
      }
    </>
  )
}

export default AgregarNutricion
