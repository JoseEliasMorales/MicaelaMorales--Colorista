import NavBar from './src/components/NavBar/NavBar'
import Home from './src/components/Home/Home'
import { StyledEngineProvider } from '@mui/material/styles'
import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Presupuesto from './src/components/Presupuesto/Presupuesto'

export function App () {
  return (
    <>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/presupuesto' element={<Presupuesto />} />
          </Routes>
        </StyledEngineProvider>
      </BrowserRouter>
    </>
  )
}
