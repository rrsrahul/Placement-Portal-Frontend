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
                applied:state.applied.concat(action.applyData),
                err:null
            }
        case actionTypes.ON_APPLY_START:
            return {
                ...state,
                err:null,
                applied:action.companies
            }
        case actionTypes.ON_APPLY_FAILED:
            return{
                ...state,
                applied:[],
                err:action.err
            }
        case actionTypes.ON_WITHDRAW_SUCCESS:
            const updatedApplied = state.applied.filter(comp=>{
                return comp.name === action.applyData.name
            })
            return {
                ...state,
                applied:updatedApplied,
                err:null
            }
        case actionTypes.ON_WITHDRAW_FAILED:
            return {
                ...state,
                err:action.err
            }
        default:
            return state
    }

    
}

export  default reducer