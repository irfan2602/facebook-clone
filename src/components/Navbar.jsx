import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system'
import React from 'react'
import { Badge } from 'react-bootstrap';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { MessageOutlined } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <div>
      <Box>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='small'
              edge="start"
              color='inherit'
              aria-label="open drawer">
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              component="div"
              nowrap >
              FaceBook Clone
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size='small'
                color='inherit'
                aria-label='show 4 new messages' >
                <Badge
                  badgeContent={4} color="error" >
                  <MessageOutlined />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                //aria-controls={menuId}
                aria-haspopup="true"
                //onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Navbar