import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/BackDrop/BackDrop';

const sideDrawer = (props)=>
{
    var attachedClasses = [classes.SideDrawer,classes.Close];

    if(props.open)
    {
        attachedClasses=[classes.SideDrawer,classes.Open];
    }
    return (
        <React.Fragment>
            <BackDrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
            <Logo />
            </div>
           
            <nav>
                <NavigationItems isAuth = {props.isAuth} isAdmin={props.isAdmin} />
            </nav>
        </div>
        </React.Fragment>
    )
}

export default sideDrawer;