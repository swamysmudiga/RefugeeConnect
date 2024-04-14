import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

const LoginPage = () => {
  // Define state variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Define a function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your login logic here, e.g., sending a request to your authentication server
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        width: '100%',
      }}
    >
      {/* Paper component for the login form with shadow */}
      <Paper
        sx={{
          padding: 4, 
          boxShadow: 3,
          borderRadius: 2,
          width: '400px', 
          textAlign: 'center',
        }}
      >
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

        {/* Login form */}
        <form onSubmit={handleSubmit}>
          {/* Username input */}
          <TextField
            label="Username"
            value={username}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(event.target.value)
            }
            margin="normal"
            fullWidth
            required
          />

          {/* Password input */}
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
            margin="normal"
            fullWidth
            required
          />

          {/* Submit button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, width: '25%' }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
