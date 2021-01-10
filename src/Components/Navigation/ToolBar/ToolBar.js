import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './ToolBar.module.css'
import Logo from '../../Logo/Logo';

const toolbar= (props)=>
{
    return (
        <header className={classes.ToolBar}>
          <Logo height="80%"/>
          <nav className={classes.DesktopOnly} >
            <NavigationItems isAuth={props.isAuth} isAdmin={props.isAdmin}/>
          </nav>
        </header>
    )
}

export default toolbar;