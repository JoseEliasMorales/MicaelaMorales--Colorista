import { Box, Card, CardContent, CardMedia, Container } from '@mui/material'
import './bienvenido.css'
import logo from './Logo2.png'
import { useState, useEffect } from 'react'
import { getDocs, collection, query, where } from '@firebase/firestore'
import { db } from '../../services/firebase/config'

const Bienvenido = () => {
  const [estilos, setEstilos] = useState([])

  useEffect(() => {
    const misEstilos = collection(db, 'estilos')

    getDocs(misEstilos)
      .then((respuesta) => {
        setEstilos(respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      })
  }, [])

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
                <Card key={estilo.id} className='card' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <CardContent style={{ padding: '10px' }}>
                    <Box component='div' position='relative' height='100%'>
                      <h4 className='title title--card'>{estilo.estilo}</h4>
                      <p className='parrafoCard'>{estilo.descripcion}</p>
                      <img src={logo} alt=' ' className='logoCard' />
                    </Box>
                  </CardContent>
                  <CardMedia component='img' alt={`estilo ${estilo.estilo}`} image={estilo.img} className='cardMedia' />
                </Card>
              )
            })
        }
      </Box>
    </Box>
  )
}

export default Bienvenido
