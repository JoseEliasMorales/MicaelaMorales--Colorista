import Box from '@mui/material/Box'
import imagenTijeras from './corteTijeras.jpg'
import imagenPeinando from './imagenPeinando.jpg'
import './imagenesPortada.css'

const ImagenesPortada = () => {
  return (
    <Box component='div' className='imagenesPortada'>
      <img src={imagenTijeras} alt='Imagen muestra: Cortando el pelo con tijeras' className='img1' />
      <img src={imagenPeinando} alt='Imagen muestra: Peinando' className='img2' />
    </Box>
  )
}

export default ImagenesPortada
