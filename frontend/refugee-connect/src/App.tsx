
import RegistrationForm from './components/RegistrationForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';
import LoginPage from './components/LoginPage';
import MainHomePage from './components/MainHomePage';
import RootLayout from './pages/NavBar';
import { Provider } from 'react-redux'; 
import store from './store/store';
import UserStories from './components/UserStories';
import AddStoryForm from './components/AddStory';


const route = createBrowserRouter([
  { 
    path:'/',
    element:<RootLayout/>,
    errorElement:<Error></Error>,
    children:[
      { path:'', element:<MainHomePage/>,},
      { path:'refugee', element:<UserStories/>,},
      {  path:'login', element:<LoginPage/> },
      { path:'signup', element:<RegistrationForm/> },
      { path:'refugee/addStory', element:<AddStoryForm/> },
    ]
  },
    
]);


function App() {
  console.log('App is rendering with RegistrationForm');
  return (<Provider store={store}><RouterProvider router={route} /></Provider>);
}

export default App;