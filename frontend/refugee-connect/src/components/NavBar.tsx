import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Select, MenuItem, SelectChangeEvent, useMediaQuery, ThemeProvider, createTheme, Switch, FormControlLabel, Slide, useScrollTrigger } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { loginOut } from '../util/login';
import i18n from '../i18n';

// Dynamic Theme
const getTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode,
    ...(mode === 'dark' ? {
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
      background: {
        default: '#000000',
        paper: '#424242',
      },
    } : {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
    }),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderBottom: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          marginLeft: '16px', // Add spacing between buttons
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h6: {
          fontFamily: 'cursive', // Change font style for "Refugee Connect"
        },
      },
    },
  },
});

export default function StylishNavBar() {
  const [language, setLanguage] = React.useState("English");
  const [themeMode, setThemeMode] = React.useState<'light' | 'dark'>('dark');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const matches = useMediaQuery('(min-width:600px)');
  const trigger = useScrollTrigger();

  const handleLanguageChange = (event: SelectChangeEvent) => {
    //console.log(event.target.value);
    //console.log(language);
    (event.target.value === "English")?setLanguage('English'):setLanguage('Marathi')
    i18n.changeLanguage(event.target.value);
  };

  async function handleLogInLogOut(action: String) {
    if (action === 'Log Out') {
      await loginOut();
      navigate('/refugee');
    } else {
      navigate('/refugee/login');
    }
  }

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setThemeMode(event.target.checked ? 'light' : 'dark');
  };

  const theme = React.useMemo(() => getTheme(themeMode), [themeMode]);

  const handleDonateClick = (resource: string) => {
    // Navigate to the respective page based on the clicked resource
    switch (resource) {
      case 'Donate':
        window.location.href='https://donate.stripe.com/test_7sIcOV4mm0hEc9O000'
        break;
      default:
        break;
    }
  };
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
            { token && role == "refugee" &&<Link to="addStory"><Button color="inherit" sx={{ mr: 2 }}>Add Story</Button></Link>}
            { token && role == "refugee" &&<Link to="addResource"><Button color="inherit" sx={{ mr: 2 }}>Add Resource</Button></Link>}
            { token && role == "refugee" &&<Link to="addCamp"><Button color="inherit" sx={{ mr: 2 }}>Add Camp</Button></Link>}
            <Button color="inherit" sx={{ mr: 2 }}>Contact</Button>
            <Button color="inherit" sx={{ mr: 2 }} onClick={() => handleDonateClick('Donate')}>Donate</Button>
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
