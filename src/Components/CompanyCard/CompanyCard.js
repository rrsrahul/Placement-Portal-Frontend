import React from 'react';
import classes from './CompanyCard.module.css'

const companyCard = (props)=>
{
    return (
        <div className={classes.Card}>
                <p>Name Company</p>
                <p> Logo </p>
                <p> CTC </p>
        </div>
    )
}

export default companyCard;