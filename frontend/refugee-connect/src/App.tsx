
import { useEffect } from 'react';
import { login } from './util/login';
import RegistrationForm from './components/RegistrationForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';
import LoginPage from './components/LoginPage';
import MainHomePage from './components/MainHomePage';
import RootLayout from './pages/NavBar';


const route = createBrowserRouter([
  { 
    path:'/refugee',
    element:<RootLayout/>,
    errorElement:<Error></Error>,
    children:[
      { path:'', element:<MainHomePage/>,},
      {  path:'login', element:<LoginPage/> },
      { path:'signup', element:<RegistrationForm/> },
  
    ]
  },
    
]);


function App() {
  console.log('App is rendering with RegistrationForm');
  return (<RouterProvider router={route} />);
}

export default App;