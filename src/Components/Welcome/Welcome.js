import React from 'react';
import classes from './Welcome.module.css';

const welcome = (props)=>
{
    return (
        <div className={classes.Welcome}>
            <h1>
                Welcome
            </h1>
        </div>
    )
}

export default welcome