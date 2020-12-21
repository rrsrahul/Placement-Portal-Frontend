import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './ToolBar.module.css'

const toolbar= (props)=>
{
    return (
        <header className={classes.ToolBar}>
          <nav className={classes.DesktopOnly} >
            <NavigationItems/>
          </nav>
        </header>
    )
}

export default toolbar;