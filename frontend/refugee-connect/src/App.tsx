
import { useEffect } from 'react';
import { login } from './util/login';
import RegistrationForm from './components/RegistrationForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';


const route = createBrowserRouter([
  { 
    path:'/refugee',
    element:<RegistrationForm/>,
    errorElement:<Error></Error>,
    children:[
        {  path:'/login', element:<HomePage/> },
        {  path:'/signup', element:<RegistrationForm/>},
        {  path:'products/:productId', element:<ProductDetails/> }
      ],
  }
]);

function App() {
  console.log('App is rendering with RegistrationForm');

  useEffect(()=>{

    async function  getTokn(){

      const data = await login("Swami Mudiga");
      console.log(data);
    }

    getTokn();
  },[]);

  return (<RouterProvider router={route} />);
}

export default App;