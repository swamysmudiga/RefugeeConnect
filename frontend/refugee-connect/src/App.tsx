
import { useEffect } from 'react';
import { login } from './util/login';
import RegistrationForm from './components/RegistrationForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';
import LoginPage from './components/LoginPage';
import MainHomePage from './components/MainHomePage';
import RefugeeHomePage from './components/RefugeeHomePage/index';
import RootLayout from './pages/NavBar';
import Accommodation from './components/RefugeeHomePage/Accomodation';
import FoodDistributionCenter from './components/RefugeeHomePage/FoodDistributionCenter';
import MedicalClinic from './components/RefugeeHomePage/MedicialClinic';
<<<<<<< HEAD
import AddStoryForm from './components/AddStory';
import UserStories from './components/UserStories';
=======
import ViewResource from './components/RefugeeHomePage/ViewResource.tsx';
>>>>>>> 8bf6e22a61e41a29ed67a57f91840bef15fb908f

const route = createBrowserRouter([
  { 
    path:'/refugee',
    element:<RootLayout/>,
    errorElement:<Error></Error>,
    children:[
      { path:'', element:<MainHomePage/>,},
      { path:'refugeeHomePage', element:<RefugeeHomePage/>,},
      {  path:'login', element:<LoginPage/> },
      { path:'signup', element:<RegistrationForm/> },
      { path:'accommodation', element:<Accommodation/> },
      { path:'food-distribution', element:<FoodDistributionCenter/> },
<<<<<<< HEAD
      { path:'medical-clinic', element:<MedicalClinic/> },
      { path:'addStory', element:<AddStoryForm/> },
      { path:'story', element:<UserStories/> }
=======
      { path:'medical-clinic', element:<MedicalClinic/> }
  
>>>>>>> 8bf6e22a61e41a29ed67a57f91840bef15fb908f
    ]
  },
    
]);

function App() {
  console.log('App is rendering with RegistrationForm');
  return (<RouterProvider router={route} />);
  //return (<ViewResource />)
}

export default App;
