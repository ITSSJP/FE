import React, { useEffect, useState } from 'react';  
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Button } from '@mui/material';  
import PropTypes from 'prop-types';  
import Profile from './Profile';  
import { IconBellRinging, IconMenu } from '@tabler/icons-react';  

const Header = (props) => {  

  const AppBarStyled = styled(AppBar)(({ theme }) => ({  
    boxShadow: 'none',  
    background: theme.palette.background.paper,  
    justifyContent: 'center',  
    backdropFilter: 'blur(4px)',  
    [theme.breakpoints.up('lg')]: {  
      minHeight: '70px',  
    },  
  }));  

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({  
    width: '100%',  
    color: theme.palette.text.secondary,  
  }));  

  return (  
    <AppBarStyled position="sticky" color="default">  
      <ToolbarStyled>  
        <IconButton  
          color="inherit"  
          aria-label="menu"  
          onClick={props.toggleMobileSidebar}  
          sx={{  
            display: {  
              lg: "none",  
              xs: "inline",  
            },  
          }}  
        >  
          <IconMenu width="20" height="20" />  
        </IconButton>  


        <Box flexGrow={1} />  

        <Stack spacing={1} direction="row" alignItems="center">  
        <Button variant="contained" color="primary" href="/auth/login">  
                Log in  
              </Button>  
              <Button variant="contained" color="primary" href="/auth/register">  
                Register  
              </Button>  
        </Stack>  
      </ToolbarStyled>  
    </AppBarStyled>  
  );  
};  

Header.propTypes = {  
  sx: PropTypes.object,  
};  

export default Header;  
