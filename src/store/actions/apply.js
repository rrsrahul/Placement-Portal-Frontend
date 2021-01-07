import * as actionTypes from './actionTypes';
import axios from 'axios';

export const applyStart = ()=>
{
    return {
        type:actionTypes.ON_APLLY_START
    }
}

export const applySuccess = (applyData,companies)=>
{
    return{
        type:actionTypes.ON_APPLY_SUCCESS,
        applyData:applyData,
        companies:companies
    }
}

export const applyFail = ()=>
{
    return {
        type:actionTypes.ON_APPLY_FAILED
    }
}

export const onApply = (applyData)=>
{
    
    return dispatch =>
    {
        dispatch(applyStart())
        axios.post('http://localhost:8080/apply',applyData)
        .then(res =>
            {
                console.log(res.data)
                console.log('Applied ')
                axios.get('http://localhost:8080/apply/student/?userId='+applyData.id)
                .then(res =>
                    {
                        console.log(res)
                        dispatch(applySuccess(applyData,res.data))
                    })
            })
            .catch(err=>
                {
                    dispatch(applyFail())
                    console.log(err)
                }
                
            )

    }
}