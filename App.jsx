import NavBar from './src/components/NavBar/NavBar'
import Portada from './src/components/Portada/Portada'
import { StyledEngineProvider } from '@mui/material/styles'
import './App.css'
import ImagenesPortada from './src/components/ImagenesPortada/ImagenesPortada'
import AcercaDe from './src/components/AcercaDe/AcercaDe'

export function App () {
  return (
    <StyledEngineProvider injectFirst>
      <NavBar />
      <Portada />
      <ImagenesPortada />
      <AcercaDe />
    </StyledEngineProvider>
  )
}
