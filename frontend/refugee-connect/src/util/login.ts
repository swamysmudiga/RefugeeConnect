
const token : String = "";
const role : String = "";

export const login= async(username : String) =>{

   try{

    const response = await fetch('http://localhost:4000/refugee/login/' + username);
    const resData = await response.json();
    console.log(resData);

    localStorage.setItem('token', resData.token);
    localStorage.setItem('role', resData.user.role);
   
    return resData;

   }catch(error){
    console.log(error);
   }

}


export const loginOut= async(username : String) =>{

    try{
 
     const response = await fetch('http://localhost:4000/refugee/login/' + username);
     const resData = await response.json();
     console.log(resData);
 
     localStorage.removeItem('token');
     localStorage.removeItem('role');


    
     return resData;
 
    }catch(error){
     console.log(error);
    }
 
 }
