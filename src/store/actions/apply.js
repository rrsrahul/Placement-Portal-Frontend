import * as actionTypes from './actionTypes';
import axios from 'axios';

export const applyStart = (companies)=>
{
    return {
        type:actionTypes.ON_APPLY_START,
        companies:companies
    }
}

export const applySuccess = (applyData)=>
{
    return{
        type:actionTypes.ON_APPLY_SUCCESS,
        applyData:applyData,
    }
}

export const applyFail = (err)=>
{
    return {
        type:actionTypes.ON_APPLY_FAILED,
        err:err
    }
}

export const onApply = (applyData)=>
{
    
    return dispatch =>
    {
        axios.post('https://placement-potal.herokuapp.com/apply',applyData)
        .then(res =>
            {
                console.log(res.data)
                console.log('Applied ')
                axios.get('https://placement-potal.herokuapp.com/apply/student/?userId='+applyData.id)
                .then(res =>
                {
                        const name = applyData.compName;
                        applyData.name = name;
                        dispatch(applySuccess(applyData))
                });  
               
            })
            .catch(err=>
                {
                    dispatch(applyFail(err.response))
                    console.log(err)
                }
                
            )

    }
}


export const withdrawSuccess = (applyData)=>
{
    return {
        type:actionTypes.ON_WITHDRAW_SUCCESS,
        applyData:applyData
    }
}

export const withdrawFailed = (err)=>
{
    return{
        type:actionTypes.ON_WITHDRAW_FAILED,
        err:err
    }
}

export const onWithdraw = (applyData)=>
{
    
    return dispatch =>
    {
        
        console.log(applyData)
        axios.post('https://placement-potal.herokuapp.com/apply/withdraw',applyData)
        .then(res =>
            {
               console.log('Removed')
               dispatch(withdrawSuccess(applyData))
               
            })
            .catch(err=>
                {
                    dispatch(withdrawFailed(err.response))
                    console.log(err.response)
                }
                
            )

    }
}