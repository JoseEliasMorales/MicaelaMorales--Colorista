import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import imagenPortada from './ImagenPortada.jpg'
import './portada.css'

const Portada = () => {
  return (
    <Box component='div' className='boxPortada' style={{ width: '100%', height: '50vw', backgroundImage: `url(${imagenPortada})`, backgroundSize: 'cover', position: 'relative', zIndex: '-1' }}>
      <Container className='contenedorPortada' style={{ position: 'absolute', top: '40%' }}>
        <h1 className='title'>-Seamos Creativas</h1>
        <h2 className='subTitle'>Dale vida a tu cabello</h2>
        <p className='trabajos'>Mechas - alisados - color - corte</p>
        <Box component='div' style={{ display: 'flex', gap: '1rem' }}>
          <Button variant='outlined' className='boton'>Presupuesto</Button>
          <Button variant='outlined' className='boton'>Turno</Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Portada
