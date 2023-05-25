import React, { useEffect, useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Box, Button, Container } from '@mui/material'
import { DatePicker, MonthCalendar, PickersDay, StaticDatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import es from 'dayjs/locale/es'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import './turnos.css'

const Turnos = () => {
  const [fecha, setFecha] = useState('')
  const [fechaCompleta, setFechaCompleta] = useState('')
  const [error, setError] = useState('')
  dayjs.extend(customParseFormat)
  dayjs.extend(isSameOrBefore)

  const seleccionFecha = (fecha) => {
    setFecha(fecha)
  }

  useEffect(() => {
    establecerFecha()
  }, [fecha])

  useEffect(() => {
    const comprobar = dayjs(fecha).isSameOrBefore(dayjs())
    console.log(comprobar)
    if (comprobar) {
      setError('La fecha tiene que ser a futuro')
    } else if (dayjs(fecha).day() === 0 || dayjs(fecha).day() === 2 || dayjs(fecha).day() === 4 || dayjs(fecha).day() === 6) {
      setError('Dia no disponible')
    } else {
      setError('')
    }
  }, [fecha])

  const establecerFecha = () => {
    const diaElegido = dayjs(fecha).date() < 10 ? '0' + dayjs(fecha).date() : dayjs(fecha).date()
    const mesActual = dayjs(fecha).month() + 1
    const mes = mesActual < 10 ? '0' + mesActual : mesActual
    const anio = dayjs(fecha).year()
    console.log(mes)
    const day = dayjs(`${anio}/${mes}/${diaElegido}`, 'YYYY/MM/DD', 'es').format('DD/MMMM/YYYY')
    setFechaCompleta(day)
  }

  return (
    <Box className='boxTurnos' display='flex' alignItems='center' justifyContent='center'>
      <Box display='flex' flexDirection='column' gap='1rem'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar onChange={(nuevaFecha) => seleccionFecha(nuevaFecha)} />
        </LocalizationProvider>
        <Box textAlign='center' color='red' fontSize='0.7rem'>
          <p>Dias elegibles : </p>
          <p>Lunes - Miercoles - Viernes</p>
        </Box>
        {
        error ? <p style={{ textAlign: 'center' }}>{error}</p> : <><p style={{ textAlign: 'center' }}>{fechaCompleta}</p><Button>Solicitar Turno</Button></>
      }
      </Box>

    </Box>
  )
}

export default Turnos
