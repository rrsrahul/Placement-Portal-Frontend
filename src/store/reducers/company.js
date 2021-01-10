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
        case actionTypes.COMPANIES_SORT:
            let newComp=[]
            if(action.value==='eligibility')
            newComp = state.companies.sort((compA,compB) => {
                return (compA.eligibility - compB.eligibility)
            })
            else if(action.value ==='ctc')
            {
                newComp = state.companies.sort((compA,compB)=>{
                    return (compA.ctc - compB.ctc)
                })
            }
            else
            {
                newComp = state.companies.sort((compA,compB)=>{
                    return (new Date(compA.date)-new Date(compB.date))
                })
            }
            return {
                ...state,
                companies:[...newComp]
            }
        default:
            return state
    }
}

export default reducer