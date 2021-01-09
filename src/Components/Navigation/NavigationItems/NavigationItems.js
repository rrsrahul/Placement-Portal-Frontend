import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';



const navigationItems = (props)=>
{
    let auth;

    if(props.isAuth)
    {
        auth=(<React.Fragment>
            <NavigationItem link="/schedule">Schedule</NavigationItem>
            <NavigationItem link="/addCompany"> Add Company</NavigationItem>
            <NavigationItem link="/user">Profile</NavigationItem>
            <NavigationItem link="/logout">Logout</NavigationItem>
            
            </React.Fragment>)
    }
    else
    {
        auth =(<NavigationItem link="/auth">
        Login
     </NavigationItem>)
    }
    return (
        <ul className={classes.NavigationItems}>
           <NavigationItem link="/" >
                Companies
           </NavigationItem>
            {auth}
           

        </ul>
    )
}

export default navigationItems;