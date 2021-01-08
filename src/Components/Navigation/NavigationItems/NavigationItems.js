import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';



const navigationItems = (props)=>
{
    let auth;

    if(props.isAuth)
    {
        auth=(<React.Fragment>
            <NavigationItem link="/company"> Add Company</NavigationItem>
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
           <NavigationItem link="/companyInfo" >
               Schedule
           </NavigationItem>
            {auth}
           

        </ul>
    )
}

export default navigationItems;