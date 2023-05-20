import { Box, Card, CardContent, CardMedia, Container } from '@mui/material'
import './bienvenido.css'
import { estilos } from '../../config/async'

const Bienvenido = () => {
  return (
    <Box className='boxBienvenido'>
      <Container style={{ padding: '1rem', position: 'relative', backgroundColor: '#ddd1c5', textAlign: 'center', marginTop: '1rem', minWidth: '100%' }}>
        <h2 className='title'>Bienvenida</h2>
        <h3 className='subtitle'>Explora mis servicios</h3>
        <p className='parrafoAcerca'>"Cada trabajo es unico y se adapta a lo que mas te guste. Con pasion y dedicacion lograremos que tu pelo destaque."</p>
      </Container>
      <Box className='boxCards'>
        {
            estilos.map(estilo => {
              return (
                <Card key={estilo.id} className='card'>
                  <CardMedia component='img' alt={`estilo ${estilo.estilo}`} image={estilo.img} className='cardMedia' />
                  <CardContent style={{ padding: '10px' }}>
                    <Box component='div'>
                      <h4>{estilo.estilo}</h4>
                    </Box>
                  </CardContent>
                </Card>
              )
            })
        }
      </Box>
    </Box>
  )
}

export default Bienvenido
