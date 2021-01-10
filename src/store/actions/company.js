import * as actionTypes from './actionTypes'
import axiosI from 'axios'

const axios = axiosI.create({
    baseURL:'http://localhost:8080/'
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