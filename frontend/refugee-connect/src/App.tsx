import React from 'react';
import NavBar from './components/NavBar';
import LoginPage from './components/LoginPage'

function App() {
  console.log('App is rendering with RegistrationForm');
  return (
    <div>
      <NavBar/>
      <LoginPage/>
    </div>
  );
}

export default App;
