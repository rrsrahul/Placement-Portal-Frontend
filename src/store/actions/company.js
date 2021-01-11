import * as actionTypes from './actionTypes'
import axiosI from 'axios'

const axios = axiosI.create({
    baseURL:'https://whispering-anchorage-84466.herokuapp.com/'
})


export const getCompSuccess = (companies)=>
{

    return {
        type:actionTypes.GET_COMPANIES_SUCCESS,
        companies:companies
    }
}

export const getCompFailed = (err)=>
{
    return {
        type:actionTypes.GET_COMPANIES_FAILED,
        err:err
    }
}

export const getCompStart = ()=>
{
    return {
        type:actionTypes.GET_COMPANIES_START
    }
}

export const getCompanies = ()=>
{
    return dispatch =>
    {
        dispatch(getCompStart());
        axios.get('/companies')
        .then(res=>
            {
                //console.log(res.data)
                //this.setState({companies:res.data})
                dispatch(getCompSuccess(res.data))
            } )
        .catch(err=>
                {
                    console.log(err)
                    dispatch(getCompFailed(err.response))
                })
    }
}

export const sortCompanies = (value)=>{
    return {
        type:actionTypes.COMPANIES_SORT,
        value:value
    }

}

export const companyDeleteSuccess = (company)=>{
    return {
        type:actionTypes.COMPANY_DELETE_SUCCESS,
        company:company
    }
}

export const companyDeleteFailed = (err)=>{
    return {
        type:actionTypes.COMPANY_DELETE_FAIL,
        err:err
    }
}

export const companySearch = (value)=>{
    return {
        type:actionTypes.COMPANY_SEARCH,
        value:value
    }
}

export const companyDelete = (company)=>{
    return dispatch =>{
        axios.delete('/companies/'+company._id)
        .then(res =>{
            console.log(company);
            dispatch(companyDeleteSuccess(company))

        })
        .catch(err=>{
            dispatch(companyDeleteFailed(err.response));
        })
    }
}