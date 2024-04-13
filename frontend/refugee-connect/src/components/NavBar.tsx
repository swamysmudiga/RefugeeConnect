import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material';

export default function ButtonAppBar() {
  // Define state to keep track of the selected language
  const [language, setLanguage] = React.useState('English');

  // Define a function to handle language changes
  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
    // Add any additional actions you want to take when the language changes
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* Add the company logo image */}
          <img
            src="/path/to/logo.png"
            alt="Company Logo"
            style={{ height: '40px', marginRight: '16px' }}
          />
          <Button color="inherit">Home</Button>
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
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
