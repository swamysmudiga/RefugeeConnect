import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material';
import { Link , useNavigate } from "react-router-dom"
import { login, loginOut } from '../util/login';

export default function ButtonAppBar() {
  // Define state to keep track of the selected language
  const [language, setLanguage] = React.useState('English');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  // Define a function to handle language changes
  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
    // Add any additional actions you want to take when the language changes
  };

  async function handleLogInLogOut(action : String){

    if(action == 'Log Out'){
      await loginOut();
      navigate('/refugee');
    }else{
      navigate('/refugee/login');
    }
   
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
              <img src="../src/images/logo.png" alt="Refugee Connect Logo" height="40" />
              <Typography variant="h6" component="div" sx={{ fontFamily: 'cursive', ml: 1 }}>
                Refugee Connect
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Link to="/refugee"><Button color="secondary" variant="contained" sx={{ mr: 2 }}>Home</Button></Link>
            <Button color="inherit" sx={{ mr: 2 }}>Contact</Button>
            <Button color="inherit" sx={{ mr: 2 }}>Donate</Button>
            <Select
              value={language}
              onChange={handleLanguageChange}
              sx={{ width: 100, marginRight: 2, bgcolor: 'background.paper' }}
              size="small"
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Marathi">Marathi</MenuItem>
            </Select>
            <Button color="secondary" onClick={() => handleLogInLogOut(token && role ? 'Log Out' : 'Log In')} sx={{ mr: 2 }}>
              {token && role ? 'Log Out' : 'Log In'}
            </Button>
            {!token && !role && (
              <Button
                color="secondary"
                variant="outlined"
                sx={{ mr: 2 }}
                onClick={() => navigate('/refugee/signup')} // Add this line to handle the click event
              >
                Sign Up
              </Button>
            )}
            <FormControlLabel
              control={<Switch checked={themeMode === 'light'} onChange={handleThemeChange} />}
              label="Theme"
            />
          </Toolbar>
        </AppBar>
      </Slide>
    </ThemeProvider>
  );
}
