import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './ToolBar.module.css'
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar= (props)=>
{
    return (
        <header className={classes.ToolBar}>
          <DrawerToggle clicked={props.clicked}/>
          <Logo height="80%"/>
          <nav className={classes.DesktopOnly} >
            <NavigationItems isAuth={props.isAuth} isAdmin={props.isAdmin}/>
          </nav>
        </header>
    )
}

export default toolbar;