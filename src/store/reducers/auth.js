import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token:null,
    userId:null,
    error:null,
    loading:false,
    userData:null,
    isAdmin:null

}

const reducer = (state=initialState,action)=>
{
    switch(action.type)
    {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading:true
            }
        case actionTypes.AUTH_SUCCESS:
            console.log(action.isAdmin)
                return {
                    ...state,
                    token:action.idToken,
                    userId:action.userId,
                    isAdmin:action.isAdmin,
                    error:null,
                    loading:false
                }
        case actionTypes.AUTH_FAILED:
            return{
                ...state,
                token:null,
                userId:null,
                error:action.err,
                loading:false
            }
        case actionTypes.AUTH_LOGOUT:
           
            return {
                ...state,
                token:null,
                userId:null,
                isAdmin:false
            }
        case actionTypes.GET_USERDATASUCCESS:
            return {
                ...state,
                userData:action.userData
            }
        case actionTypes.GET_USERDATAFAILED:
            return {
                ...state,
                err:action.err
            }
        default:
            return {
                ...state
            }
    }
    
}

export  default reducer