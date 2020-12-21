import React from 'react'
import classes from './Logo.module.css';
import bmsLogo from '../../assets/images/bmsLogo.jpg'

const logo = (props) =>
{
    return (<div className={classes.Logo} style={{height:props.height}}>
        <img src={bmsLogo} alt="MyLogo"/>
    </div>

    )
}

export default logo;