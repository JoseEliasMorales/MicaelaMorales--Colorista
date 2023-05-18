import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import Logo from './Logo.png'
import Theme from '../../Providers/theme/Theme'
import { ThemeProvider } from '@mui/material/styles'

const pages = ['Inicio', 'Turnos', 'Productos']

const NavBar = () => {
  const [anchorNav, setAnchorNav] = useState(null)

  const handleOpenNav = (event) => {
    setAnchorNav(event.currrentTarget)
  }

  const handleCloseNav = () => {
    setAnchorNav(null)
  }

  return (
    <ThemeProvider theme={Theme}>
      <AppBar position='static' color='primary'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <img style={{ width: '200px', margin: '1em' }} src={Logo} alt='Logo Micaela Morales-Colorista' />
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton size='large' aria-label='account of current user' aria-controls='menu-appbar' aria-haspopup='true' onClick={handleOpenNav} color='inherit'>
                <MenuIcon />
              </IconButton>
              <Menu id='menu-appbar' anchorEl={anchorNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left' }} open={Boolean(anchorNav)} onClose={handleCloseNav} sx={{ display: { xs: 'block', md: 'none' } }}>
                {pages.map((page) => {
                  return (
                    <MenuItem key={page} onClick={handleCloseNav}>
                      {page}
                    </MenuItem>
                  )
                })}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default NavBar
