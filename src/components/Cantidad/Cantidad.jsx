import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'
import Procesos from '../Procesos/Procesos'

const Cantidad = () => {
  const [cantidad, setCantidad] = useState('')

  const handleChange = (event) => {
    event.preventDefault()

    setCantidad(event.target.value)
  }

  return (
    <>
      <FormControl fullWidth style={{ marginTop: '1rem' }}>
        <InputLabel style={{ display: 'flex' }} id='demo-simple-select-label' className='name'>Cantidad de cabello</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={cantidad}
          label='Cantidad de cabello'
          onChange={handleChange}
          className='name'
        >
          <MenuItem className='name' value={1}>Poco</MenuItem>
          <MenuItem className='name' value={2}>Normal</MenuItem>
          <MenuItem className='name' value={3}>Mucho</MenuItem>
        </Select>
      </FormControl>
      {
        cantidad
          ? <Procesos />
          : undefined
      }
    </>
  )
}

export default Cantidad
