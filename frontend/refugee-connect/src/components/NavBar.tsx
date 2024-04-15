import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material';
import { Link } from "react-router-dom"

export default function ButtonAppBar() {
  // Define state to keep track of the selected language
  const [language, setLanguage] = React.useState('English');

  // Define a function to handle language changes
  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
    // Add any additional actions you want to take when the language changes
  };

  function handleLogInLogOut(action : String){

    

  }

  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary" enableColorOnDark>
        <Toolbar>
          {/* Add the company logo image */}
          <img
            src="/path/to/logo.png"
            alt="Company Logo"
            style={{ height: '40px', marginRight: '16px' }}
          />
          <Link to="/refugee"><Button color="secondary">Home</Button></Link>
          <Button color="inherit">Contact Us</Button>
          <Button color="inherit">Donate Us</Button>
          
          {/* Add a Box with flexGrow: 1 to push the other elements to the right */}
          <Box sx={{ flexGrow: 1 }} />
          
          {/* Add the language dropdown to the right side */}
          <Select
            value={language}
            onChange={handleLanguageChange}
            sx={{ marginRight: 2 }}
          >
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Marathi">Marathi</MenuItem>
          </Select>
          {/* Add Login and Sign Up buttons to the right side */}
          <Link to="login"><Button color="secondary" onClick={ () => handleLogInLogOut(token && role ? 'Log Out' : 'Log In') }>{ (token && role) ?'Log Out':'Log In'}</Button></Link>
          { (token && role)?'':<Link to="signup"><Button color="secondary">Sign Up</Button></Link> }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
