import { Box, Container } from '@mui/material'
import imagenPortada from './ImagenPortada.jpg'
import './portada.css'

const Portada = () => {
  return (
    <Box component='div' style={{ width: '100%', height: '50vw', backgroundImage: `url(${imagenPortada})`, backgroundSize: 'cover', position: 'relative', top: '-100px', zIndex: '-1' }}>
      {/* <img className='imagenPortada' src={imagenPortada} alt='imagen de portada' /> */}
      <Container style={{ position: 'absolute', color: '#fff', top: '40%', left: '10%' }}>
        <h1 className='title'>-Seamos Creativas</h1>
        <h2>Dale vida a tu cabello</h2>
        <p>Mechas - alisados - color - corte</p>
      </Container>
    </Box>

  )
}

export default Portada
