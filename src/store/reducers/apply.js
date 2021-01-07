import * as actionTypes from '../actions/actionTypes';

const initialState = {
   applied:[],
   err:null

}

const reducer = (state=initialState,action)=>
{
    switch(action.type)
    {
        case actionTypes.ON_APPLY_SUCCESS:
            return {
                ...state,
                applied:action.companies,
                err:null
            }
        case actionTypes.ON_APPLY_FAILED:
            return{
                ...state,
                applied:[],
                err:action.err
            }
        default:
            return state
    }

    
}

export  default reducer