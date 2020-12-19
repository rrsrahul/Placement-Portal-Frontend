import React from 'react';
import classes from './CompanyCard.module.css'

const companyCard = (props)=>
{
    return (
        <div className={classes.Card}>
                <p>{props.name}</p>
                <p> CTC:{ props.ctc}</p>
                <p>Date:{props.date}</p>
        </div>
    )
}

export default companyCard;