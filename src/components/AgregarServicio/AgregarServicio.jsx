import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'
import Estilos from '../Estilos/Estilos'

const AgregarServicio = () => {
  const [servicio, setServicio] = useState('')

  const handleChange = (event) => {
    event.preventDefault()

    setServicio(event.target.value)
  }

  return (
    <>
      <FormControl fullWidth style={{ marginTop: '1rem' }}>
        <InputLabel id='demo-simple-select-label' className='name'>Estilo</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={servicio}
          label='Estilo'
          onChange={handleChange}
          className='name'
        >
          <MenuItem className='name' value={1}>Color en Raices</MenuItem>
          <MenuItem className='name' value={2}>Color Global</MenuItem>
          <MenuItem className='name' value={3}>Mechas</MenuItem>
          <MenuItem className='name' value={4}>Balayage</MenuItem>
          <MenuItem className='name' value={5}>Nutrición</MenuItem>
          <MenuItem className='name' value={6}>Otro...</MenuItem>
        </Select>
      </FormControl>
      {
        servicio > 1
          ? <Estilos />
          : ''
      }
    </>
  )
}

export default AgregarServicio
