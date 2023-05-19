import Box from '@mui/material/Box'
import imagenTijeras from './corteTijeras.jpg'
import imagenPeinando from './imagenPeinando.jpg'
import './acercaDe.css'
import { Container } from '@mui/material'
import iconoTijeras from './salon.png'
import mujerIcon from './mujer.png'
import lineas from './lineas.png'

const AcercaDe = () => {
  return (
    <Container className='contenedorAcerca'>
      <Box component='div' className='boxImagenes' style={{ margin: '15px auto 15px auto', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={imagenTijeras} alt='Imagen muestra: Cortando el pelo con tijeras' className='img1' />
        <img src={imagenPeinando} alt='Imagen muestra: Peinando' className='img2' />
      </Box>
      <Box component='div' className='boxDetalles' style={{ position: 'relative', backgroundColor: '#ddd1c5', padding: '1rem', textAlign: 'center' }}>
        <img src={lineas} alt=' ' style={{ position: 'absolute', left: '0', height: '100%', rotate: '-5deg', opacity: '0.05' }} />
        <h2 className='title title--acerca'>Acerca de mi</h2>
        <h3 className='subtitle subtitle--acerca'>Buscando tu estilo</h3>
        <p className='parrafoAcerca'>Juntas vamos a buscar el estilo que mas se adapte y refleje toda tu personalidad</p>
        <Box component='div' style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '1rem' }}>
          <div className='datos dato1'>
            <img src={iconoTijeras} alt='icono tijeras' className='icon' />
            <div>
              <p className='dato'>300+</p>
              <p className='detalle'>Estilos</p>
            </div>
          </div>
          <div className='datos'>
            <img src={mujerIcon} alt='icono mujer' className='icon' />
            <div>
              <p className='dato'>500+</p>
              <p className='detalle'>Clientes Satisfechos</p>
            </div>
          </div>
        </Box>
      </Box>
    </Container>
  )
}

export default AcercaDe
