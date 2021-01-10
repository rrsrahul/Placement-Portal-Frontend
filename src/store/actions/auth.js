import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = ()=>
{
    return {
        type:actionTypes.AUTH_START
    }
}


export const authSuccess = (token,userId)=>
{
    return {
        type:actionTypes.AUTH_SUCCESS,
        idToken:token,
        userId:userId,
        
    }
}

export const authFailed = (err)=>
{
    return{
        type:actionTypes.AUTH_FAILED,
        err:err
    }
}

export const logout = ()=>
{
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
   
    return{
        type:actionTypes.AUTH_LOGOUT
    }
}


export const auth = (email,password,login,history)=>
{
    return dispatch =>
    {
        dispatch(authStart());
        const authData = {
            email:email,
            password:password,
        }
        let url = 'http://localhost:8080/admin/signup';
        if(!login)
        {
            axios.post(url,authData)
            .then(res=>{
                dispatch(authSuccess(res.data.token,res.data.userId));
                
            })
            .catch(err=>
                {
                    
                    dispatch(authFailed(err));
                })
        }
        
        
    if(login)
    {
            url='http://localhost:8080/admin/login';
        
        axios.post(url,authData)
        .then(res=>{
            console.log(res)

           

            //Setting the Token in the Local Storage
            localStorage.setItem('token',res.data.token);

            //localStorage.setItem('expirationDate',expirationDate)
            localStorage.setItem('userId',res.data.userId);


            
            dispatch(authSuccess(res.data.token,res.data.userId,res.data.userData));
            console.log(res.data.user)
            history.push('/')
            //dispatch(checkAuthTimeout(res.data.expiresIn))
        })
        .catch(err=>
        {
           
           dispatch(authFailed(err.response));
        })
    }

    }

}



export const authCheckState = ()=>
{
    console.log('Trying Auto SignUp')
    return dispatch =>
    {
        const token = localStorage.getItem('token');
        if(!token)
        {
           dispatch(logout())
        }
        else
        {
                const userId = localStorage.getItem('userId')
                dispatch(authSuccess(token,userId)) 
        }
               

                
        
    }
}

//Get the current student and store it in the state
//axios.get('http:localhost:8080/students/'+userId).then().catch()

export const getUserSuccess = (data)=>{
    return {
        type:actionTypes.GET_USERDATASUCCESS,
        userData:data
    }
}

export const getUserFailed = (err)=>{
    return {
        type:actionTypes.GET_USERDATAFAILED,
        err:err
    }
}

export const getUser = (userId)=>{
    return dispatch =>{
        axios.get('http://localhost:8080/students/'+userId)
            .then(res=>{
                dispatch(getUserSuccess(res.data))
            })
            .catch(err=>{
                dispatch(getUserFailed(err.response))
            })
    }

}