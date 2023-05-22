import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import imagenPortada from './ImagenPortada.jpg'
import './portada.css'
import AcercaDe from '../AcercaDe/AcercaDe'
import Bienvenido from '../Bienvenido/Bienvenido'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Box component='div' className='boxPortada' style={{ width: '100%', height: '50vw', backgroundImage: `url(${imagenPortada})`, backgroundSize: 'cover', position: 'relative', zIndex: '-1' }}>
        <Container className='contenedorPortada' style={{ position: 'absolute', top: '40%' }}>
          <h1 className='title'>-Seamos Creativas</h1>
          <h2 className='subTitle'>Dale vida a tu cabello</h2>
          <p className='trabajos'>Mechas - alisados - color - corte</p>
          <Box component='div' style={{ display: 'flex', gap: '1rem' }}>
            <Button variant='outlined' className='boton'><Link to='/presupuesto'>Presupuesto</Link></Button>
            <Button variant='outlined' className='boton'>Turno</Button>
          </Box>
        </Container>
      </Box>
      <AcercaDe />
      <Bienvenido />
    </>
  )
}

export default Home
