import Box from '@mui/material/Box'
import iconoTijeras from './salon.png'
import mujerIcon from './mujer.png'
import './acercaDe.css'

const AcercaDe = () => {
  return (
    <Box component='div' className='acerca'>
      <h2 className='title'>Acerca de mi</h2>
      <h3 className='subtitle'>Buscando tu estilo</h3>
      <p className='parrafoAcerca'>Juntas vamos a buscar el estilo que mas se adapte y refleje toda tu personalidad</p>
      <Box component='div' className='boxDatos'>
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
  )
}

export default AcercaDe
