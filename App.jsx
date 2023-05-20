import NavBar from './src/components/NavBar/NavBar'
import Portada from './src/components/Portada/Portada'
import { StyledEngineProvider } from '@mui/material/styles'
import './App.css'
import AcercaDe from './src/components/AcercaDe/AcercaDe'
import Bienvenido from './src/components/Bienvenido/Bienvenido'
export function App () {
  return (
    <StyledEngineProvider injectFirst>
      <NavBar />
      <Portada />
      <AcercaDe />
      <Bienvenido />
    </StyledEngineProvider>
  )
}
