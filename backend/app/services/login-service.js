import login_model from '../models/login.js'

export const addLogIn = async(user) =>{

    const loginDetails = new login_model(user);
    return loginDetails.save();
    
}

export const findByUserName = async(userName) =>{

    const user =  await login_model.findOne({username: userName});
    
    if (!user) {
        console.log('User not found');
        // Handle case where user is not found
        return ;
      }
    
      // User found, do something with it
      console.log('Found user:', user);
      return user;
    
}