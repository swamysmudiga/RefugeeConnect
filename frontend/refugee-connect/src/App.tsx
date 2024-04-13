
import { useEffect } from 'react';
import { login } from './util/login';

function App() {
  console.log('App is rendering with RegistrationForm');


  useEffect(()=>{

    async function  getTokn(){

      const data = await login("Swami Mudiga");
      console.log(data);
    }

    getTokn();
  },[]);


  return (
    <div>
      <h1>Welcome to Refugee Connect</h1>
    </div>
  );
}

export default App;
