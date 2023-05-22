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
import './navbar.css'
import { Link } from 'react-router-dom'

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
    <AppBar position='relative' className='navbar'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Link to='/'>
            <img className='logo' src={Logo} alt='Logo Micaela Morales-Colorista' />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }}>
            <IconButton size='large' aria-label='account of current user' aria-controls='menu-appbar' aria-haspopup='true' onClick={handleOpenNav} style={{ color: '#fff' }}>
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
  )
}

export default NavBar
