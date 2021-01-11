import * as actionTypes from '../actions/actionTypes'
import stringSimilarity from 'string-similarity';

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
            if(action.value==='eligibility'){
            newComp = state.companies.sort((compA,compB) => {
                return (compA.eligibility - compB.eligibility)
            })}
            else if(action.value ==='ctc')
            {
                newComp = state.companies.sort((compA,compB)=>{
                    return (compA.ctc.split(' ')[0] - compB.ctc.split(' ')[0])
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
        case actionTypes.COMPANY_SEARCH:
            let newCompanies =[];
            newCompanies = state.companies.sort((compA,compB)=>{
                let valA = stringSimilarity.compareTwoStrings(compA.position,action.value)
                let valB = stringSimilarity.compareTwoStrings(compB.position,action.value)
                return (valB-valA)
            })
            return {
                ...state,
                companies:[...newCompanies]
            }
        case actionTypes.COMPANY_DELETE_SUCCESS:
            const updatedCompanies = state.companies.filter(company=>{
                return company._id !==action.company._id
            })
            return {
                ...state,
                companies:updatedCompanies,
                err:null
            }
        case actionTypes.COMPANY_DELETE_FAIL:
            return {
                ...state,
                err:action.err
            }
        default:
            return state
    }
}

export default reducer