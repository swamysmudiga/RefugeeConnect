
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
import AddStoryForm from './components/AddStory';
import UserStories from './components/UserStories';
import ViewAllResources from './components/RefugeeHomePage/ViewAllResources';
import ViewAllCamp from './components/RefugeeHomePage/ViewAllCamp';
import ViewCamp from './components/RefugeeHomePage/ViewCamp.tsx';
import AddResource from './components/UserHomePage/AddResource.tsx';
<<<<<<< HEAD
import ViewResource from './components/ViewResource.tsx'
import ResourceAdditionPage from './components/UserHomePage/AddResource.tsx';
=======
import AddCamp from './components/AdminHomePage/AddCamp.tsx';

>>>>>>> dffb934b385a1bc558bd6a0e876e2c6f807f8687
>>>>>>> a7dc191883629a7da488f3ce37abda4e9dd875db
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
      {path:'viewAllResource', element:<ViewAllResources />},
      {path:'viewNearByCamps', element:<ViewAllCamp />},
      { path:'accommodation', element:<Accommodation/> },
      { path:'food-distribution', element:<FoodDistributionCenter/> },
      { path:'medical-clinic', element:<MedicalClinic/> },
      { path:'addStory', element:<AddStoryForm/> },
      { path:'story', element:<UserStories/> },
      { path:'viewResource/:id', element:<ViewResource/> },
      { path:'addResource', element:<ResourceAdditionPage/> },

    ]
  },
    
]);

function App() {
  console.log('App is rendering with RegistrationForm');
  return (<RouterProvider router={route} />);  

}

export default App;
