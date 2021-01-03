import * as actionTypes from '../actions/actionTypes'

const initialState = {
    companies: [],
    err:null,
    loading: null
}

const reducer = (state = initialState,action) =>
{
    switch(action.type)
    {
        case actionTypes.GET_COMPANIES_START:
           return {
                ...state,
                loading:true
            }
        case actionTypes.GET_COMPANIES_FAILED:
            return{
                ...state,
                loading:false,
                err:action.err
            }
        case actionTypes.GET_COMPANIES_SUCCESS:
            return{
                ...state,
                companies:action.companies,
                loading:false,
                err:null
            }
        default:
            return state
    }
}

export default reducer