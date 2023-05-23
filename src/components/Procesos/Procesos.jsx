import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useEffect, useState } from 'react'
import AgregarNutricion from '../AgregarNutricion/AgregarNutricion'

const Procesos = () => {
  const [proceso, setProceso] = useState('')
  const [message, setMessage] = useState('')
  const [agregar, setAgregar] = useState(false)

  const handleChange = (event) => {
    event.preventDefault()

    setProceso(event.target.value)
  }

  useEffect(() => {
    if (proceso === 1) {
      setMessage('*Sin color, ni tratamientos con formol')
    } else if (proceso === 2) {
      setMessage('*Cualquier clase de tinte, ya sea tono sobre tono o con amoniaco')
    } else if (proceso === 3) {
      setMessage('')
    } else if (proceso === 4) {
      setMessage('*Ya sean alisados, keratinas o botox')
    }
  }, [proceso])

  return (
    <>
      <FormControl fullWidth style={{ marginTop: '1rem' }}>
        <InputLabel style={{ display: 'flex' }} id='demo-simple-select-label' className='name'>Procesos previos</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={proceso}
          label='Procesos previos'
          onChange={handleChange}
          className='name'
        >
          <MenuItem className='name' value={1}>Cabello Natural</MenuItem>
          <MenuItem className='name' value={2}>Color</MenuItem>
          <MenuItem className='name' value={3}>Decoloracion</MenuItem>
          <MenuItem className='name' value={4}>Con Formol</MenuItem>
        </Select>
      </FormControl>
      {
            proceso
              ? <p style={{ color: 'red', fontSize: '12px' }}>{message}</p>
              : ''
        }
      {
            proceso && agregar === false
              ? <><Button variant='text' onClick={() => setAgregar(true)}>Agregar Tratamiento</Button><Button variant='text'>Calcular</Button></>
              : false
        }
      {
            agregar
              ? <AgregarNutricion />
              : false
        }

    </>
  )
}

export default Procesos
