import * as actionTypes from '../actions/actionTypes';

const initialState = {
   applied:[]

}

const reducer = (state=initialState,action)=>
{
    switch(action.type)
    {
        case actionTypes.ON_APPLY_SUCCESS:
            return {
                ...state,
                applied:action.companies
            }
        default:
            return state
    }

    
}

export  default reducer